import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.png';

import { Creators as AuthActions } from '../../store/ducks/auth';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(AuthActions.signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Spotify" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter your email" />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">{loading ? 'Loading...' : 'Enter'}</button>

        <Link to="/register">Create your free account</Link>
      </Form>
    </>
  );
}
