import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import { Container } from './styles';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input
          name="password"
          type="oldpassword"
          placeholder="Sua senha Atual"
        />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="password"
          type="confirmPassword"
          placeholder="Repita sua Nova Senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="submit" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
