import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  img {
    width: 100px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgb(255, 255, 255);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #111111;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }
    span {
      color: #ffffff;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #1db854;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#1db854')};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
