import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('o nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail Valido')
    .required('O e-mail é Obrigatório'),
  password: Yup.string()
    .min(6, 'no minimo 6 caracteres')
    .required('A senha é Obrigatória')
});

export default function SingUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Insira seu e-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
