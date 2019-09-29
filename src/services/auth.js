import axios from 'axios';

const auth = axios.create({
  baseURL: 'https://ci-auth-service.herokuapp.com/api/v1/auth',
});

export default auth;
