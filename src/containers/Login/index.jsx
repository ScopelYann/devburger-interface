import LogoLogin from '../../assets/logoLogin.svg'
import { Input } from '../../components/index.js'
import { ContainerLogin, RightContainer, LeftContainer, InputContainer, Form, Button } from './style';


import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRef } from 'react';
import { api } from '../../services/api.js';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';

export function Login() {


  const { putUserData } = useUser()

  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().required('E-mail Obrigatorio!').email('Digite um e-mail válido!'),
    password: yup.string().required('Senha Obrigatoria').min(6, 'A senha deve conter 6 caracteres ou mais!')
  }).required()

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })


  const OnSubmit = async (datas) => {
    const { data } = await toast.promise(

      api.post('/sessions', {
        email: datas.email,
        password: datas.password
      }),
      {
        pending: "Verificando Dados.",
        error: "Senha ou E-mail Incorretos!",
        success: {
          render() {
            setTimeout(() => {

              if(data?.admin){
                navigate('/admin/orders')
              }else{
                navigate('/')
              }
              
            }, 2000)
            return `Login Realizado Com Sucesso!`

          },
        }
      }

    )
    putUserData(data)
  }

  return (
    <ContainerLogin >

      <LeftContainer className='LeftContainer'>
        <img src={LogoLogin} alt="Logo Hamburgueria" />
      </LeftContainer>

      <RightContainer className='RightContainer'>

        <h2>Olá, seja bem vindo ao <span>Dev Burguer!</span>
          Acesse com seu <span>Login e senha.</span></h2>

        <Form onSubmit={handleSubmit(OnSubmit)}>
          <InputContainer>

            <Input
              {...register("email")}//sync the input with field email in yup schema, for sync the Component, make ref function in archive.
              placeholder='youremailexample@gmail.com'
              type='email'
            >
              Email
            </Input>

            <p className='errorMensageP'>{errors?.email?.message}</p>

            <Input
              {...register("password")}//sync the input with field password in yup schema
              type='password'
              placeholder='123456.....'
            >
              Senha
            </Input>

            <p className='errorMensageP'>{errors?.password?.message}</p>


            <Button type="submit" theme={true}>ENTRAR</Button>

            <p className='NotAccount'>Não possui conta? <Link to="/register">Clique Aqui.</Link></p>



          </InputContainer>
        </Form>
      </RightContainer>

    </ContainerLogin>
  );
}

