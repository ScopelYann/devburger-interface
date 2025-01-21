import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Image } from "@phosphor-icons/react";

import { Container, Form, InputGroup, CheckOffer, Label, Input, LabelUpload, Select, SubmitButton, ErrorMensage } from './style.js'
import { useEffect, useState } from "react";
import { api } from "../../../services/api.js";

import { Controller, useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const schema = yup.object({
    name: yup.string().required('Digite o nome do produto.'),
    price: yup.number().positive().required('Digite o preço do produto.').typeError('Forneça um numero'),
    category: yup.object().required('Escolha uma categoria.'),
    offer: yup.bool()
}).required();

export function EditProduct() {

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

    const { state: { product } } = useLocation()

    const onSubmit = async (data) => {
        const productFormData = new FormData()

        productFormData.append('name', data.name)
        productFormData.append('price', data.price * 100)
        productFormData.append('category_id', data.category.id)
        productFormData.append('offer', data.offer)


        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando Produto..',
            success: 'Produto Editado Com Sucesso',
            error: 'falha ao editar produto, Tente novamente!'
        })

        setTimeout(() => {
            navigate('/admin/ls-product')
        },2000)
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
                    <Input
                        type='text'
                        {...register('name')}
                        defaultValue={product.name} />
                    <ErrorMensage>{errors?.name?.message}</ErrorMensage>


                    <Label>Preço</Label>
                    <Input
                        type='number'
                        {...register('price')}
                        defaultValue={product.price / 100} />
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
                        <input type='checkbox' defaultChecked={product.offer} {...register('offer')} />
                    </CheckOffer>
                </InputGroup>

                <InputGroup>
                    <Label>Categorias</Label>

                    <Controller
                        name='category'
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => (

                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder='categorias'
                                defaultValue={product.category}

                            />
                        )}
                    />
                    <ErrorMensage>{errors?.category?.message}</ErrorMensage>



                </InputGroup>

                <SubmitButton>Editar Produto</SubmitButton>
            </Form>

        </Container>
    )
}