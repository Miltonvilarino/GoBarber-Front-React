import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSucess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {})
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil Atualizado com Sucesso!');

    yield put(updateProfileSucess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o perfil, confira seus dados');
    yield put(updateProfileFailure());
  }
}

export function* setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    yield (api.defaults.headers.Authorization = `Bearer ${token}`);
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
