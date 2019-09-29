import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../../components/Sidebar';
import Player from '../../../components/Player';
import Header from '../../../components/Header';
import ErrorBox from '../../../components/ErrorBox';

import { Wrapper, Container, Content } from '../../../styles/components';


export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <ErrorBox />
          <Header />
          {children}
        </Content>
      </Container>
      <Player />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
