import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail Valido')
    .required('O e-mail é Obrigatório'),
  password: Yup.string().required('A senha é Obrigatória')
});

export default function Singin() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta Gratuita</Link>
      </Form>
    </>
  );
}
