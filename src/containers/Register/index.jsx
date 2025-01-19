import LogoLogin from '../../assets/logoLogin.svg'
import {Input} from '../../components/index.js'
import { ContainerLogin, RightContainer, LeftContainer, InputContainer, Form, Button } from './style';


import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api.js';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export function Register() {


    const navigate = useNavigate()

    const schema = yup.object({
        name: yup.string().required('Nome Obrigatorio!'),
        email: yup.string().required('E-mail Obrigatorio!').email('Digite um e-mail válido!'),
        password: yup.string().required('Senha Obrigatoria').min(6, 'A senha deve conter 6 caracteres ou mais!'),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais.").required("Confirme sua senha!")
    }).required()

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const OnSubmit = async (data) => {

        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
            },
                {
                    validateStatus: () => true,
                }

                // {
                //     pending: "Verificando Dados.",
                //     error: "Algo deu errado, Tente novamente!",
                //     success: "Cadastrado efetuado com sucesso!",
                // }
            )

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate("/login")
                }, 2100)
                toast.success('Conta Criada Com Sucesso')
            }
            else if (status === 400) {
                toast.error('E-mail já existente!')
            }
            else {
                throw new Error()
            }
        }
        catch (errors) {
            toast.error('Erro ao cadastrar, Tente novamente!')
        }
    }



    return (
        <ContainerLogin >

            <LeftContainer className='LeftContainer'>
                <img src={LogoLogin} alt="Logo Hamburgueria" />
            </LeftContainer>

            <RightContainer className='RightContainer'>

                <h2><span>Criar conta</span></h2>

                <Form
                    onSubmit={handleSubmit(OnSubmit)}
                >
                    <InputContainer>

                        <Input
                            {...register("name")}//sync the input with field email in yup schema, for sync the Component, make ref function in archive.
                            type='text'
                        >
                            Nome
                        </Input>
                        <p className='errorMensageP'>{errors?.name?.message}</p>


                        <Input
                            {...register("email")}//sync the input with field email in yup schema, for sync the Component, make ref function in archive.
                            type='email'
                        >
                            Email
                        </Input>
                        <p className='errorMensageP'>{errors?.email?.message}</p>



                        <Input
                            {...register("password")}//sync the input with field password in yup schema
                            type='password'
                        >
                            Senha
                        </Input>
                        <p className='errorMensageP'>{errors?.password?.message}</p>

                        <Input
                            {...register("confirmPassword")}//sync the input with field confirmPass in yup schema
                            type='password'
                        >
                            Confirme a senha
                        </Input>

                        <p className='errorMensageP'>{errors?.confirmPassword?.message}</p>


                        < Button
                            type="submit"
                            theme={true}
                        >
                            CONFIRMAR CADASTRO
                        </Button>

                        <p className='NotAccount'>Já possui conta? <Link to="/login">Clique Aqui.</Link></p>



                    </InputContainer>
                </Form>
            </RightContainer >

        </ContainerLogin >
    );
}


