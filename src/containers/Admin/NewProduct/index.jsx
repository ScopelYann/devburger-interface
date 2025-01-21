import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Image } from "@phosphor-icons/react";

import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMensage, CheckOffer } from './style.js'
import { useEffect, useState } from "react";
import { api } from "../../../services/api.js";

import { Controller, useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const schema = yup.object({
    name: yup.string().required('Digite o nome do produto.'),
    price: yup.number().positive().required('Digite o preço do produto.').typeError('Forneça um numero'),
    category: yup.object().required('Escolha uma categoria.'),
    offer: yup.bool(),
    file: yup.mixed().test('required', 'Escolha um arquivo para continuar', value => {
        return value && value.length > 0
    }).test('filesize', 'Carregue arquivos até 5mb', value => {
        return value && value.length > 0 && value[0].size < 50000
    }).test('type', 'Carregue Imagens PNG ou JPEG', value => {
        return value && value.length > 0 && value[0].type === 'image/jpeg' || value[0].type === 'image/png'
    }),
}).required();

export function NewProduct() {

    const [filename, setFileName] = useState(null)
    const [categories, setCategory] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')
            setCategory(data)
        }
        loadCategories()
    }, [])


    const onSubmit = async (data) => {
        const productFormData = new FormData()

        productFormData.append('name', data.name)
        productFormData.append('price', data.price * 100)
        productFormData.append('category_id', data.category.id)
        productFormData.append('file', data.file[0])
        productFormData.append('offer', data.offer)


        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando Produto..',
            success: 'Produto Adicionado Com Sucesso',
            error: 'falha ao adicionar produto, Tente novamente!'
        })

        setTimeout(() => {
            navigate('/admin/ls-product')
        }, 2000)
    }

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type='text' {...register('name')} />
                    <ErrorMensage>{errors?.name?.message}</ErrorMensage>


                    <Label>Preço</Label>
                    <Input type='number' {...register('price')} />
                    <ErrorMensage>{errors?.price?.message}</ErrorMensage>


                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input
                            type="file"
                            {...register('file')}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value?.target.files[0]?.name)
                                register('file').onChange(value)
                            }}
                        />

                        {filename || 'Upload do Produto'}
                        <ErrorMensage>{errors?.file?.message}</ErrorMensage>

                    </LabelUpload>
                </InputGroup>

                <InputGroup>
                    <CheckOffer>
                        <Label>Em Oferta?</Label>
                        <input type='checkbox' {...register('offer')} />
                    </CheckOffer>
                </InputGroup>

                <InputGroup>
                    <Label>Categorias</Label>

                    <Controller
                        name='category'
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder='categorias'

                            />
                        )}
                    />
                    <ErrorMensage>{errors?.category?.message}</ErrorMensage>



                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>

        </Container>
    )
}