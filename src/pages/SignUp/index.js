import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.png';

import { Creators as AuthActions } from '../../store/ducks/auth';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, '6 characters minimum')
    .required('Password is required'),
  confirm_password: Yup.string()
    .min(6, '6 characters minimum')
    .required('Confirm your password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({
    name, email, password, confirm_password,
  }) {
    dispatch(AuthActions.signUpRequest(name, email, password, confirm_password));
  }

  return (
    <>
      <img src={logo} alt="Spotify" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Enter your email" />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm your password"
        />

        <button type="submit">Create account</button>

        <Link to="/">I already have a login?</Link>
      </Form>
    </>
  );
}
