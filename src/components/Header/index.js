import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Search, User } from './styles';

import { Creators as AuthActions } from '../../store/ducks/auth';
// import { Container } from './styles';
export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(AuthActions.signOut());
  }

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Search>
        <input type="text" placeholder="Search" />
      </Search>
      <div>
        <User>
          <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Avatar" />
          {profile.name}
          <button onClick={handleSignOut}>Sair</button>
        </User>
      </div>
    </Container>
  );
}
