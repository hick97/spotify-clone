import {
  call, put,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../services/history';
import auth from '../../services/auth';
import api from '../../services/api';

import { Creators as authActions } from '../ducks/auth';


export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(auth.post, 'login', {
      email,
      password,
    });

    const { token, name } = response.data;

    const user = { name, email };

    auth.defaults.headers.Authorization = `Bearer ${token}`;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(authActions.signInSuccess(token, user));

    history.push('/');
  } catch (err) {
    toast.error('Authentication failed, check your fields');
    yield put(authActions.signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const {
      name, email, password, confirm_password,
    } = payload;

    yield call(auth.post, 'signup', {
      name,
      email,
      password,
      confirm_password,
    });
    toast.success('Account successfully created');

    history.push('/login');
  } catch (err) {
    toast.error('Register failed, check your fields');
    yield put(authActions.signFailure());
  }
}

// Handling token to private requests in redux-persist
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/login');
}
