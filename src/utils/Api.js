import axios from 'axios';

const URL = {
  AUTH: 'https://connections-api.herokuapp.com',
};
const ENDPOINT = {
  REGISTER: '/users/signup',
  LOGIN: '/users/login',
  CUR_USER: '/users/current',
};
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// const API_KEY = 'AIzaSyCqS0eMp_B8vr9aIzvlZrk1wcjaQI0u3sE';

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
export function registerUserApi(userData) {
  axios.defaults.baseURL = URL.AUTH;
  //   axios.defaults.params = { key: API_KEY };
  return axios.post(ENDPOINT.REGISTER, userData).then(res => res);
}
export function loginUserApi(userData) {
  axios.defaults.baseURL = URL.AUTH;
  return axios.post(ENDPOINT.LOGIN, userData).then(res => res.data);
}

export const getContactsApi = () => {
  axios.defaults.baseURL = URL.AUTH;
  return axios.get('/contacts').then(obj => {
    // console.log('getContactsApi-obj: ', obj);
    // console.log('getContactsApi-obj.data: ', obj.data);
    return obj.data;
  });
};
export const postContactsApi = data => {
  axios.defaults.baseURL = URL.AUTH;
  //   console.log('postContactsApi-data: ', data);
  return axios.post('/contacts', data).then(obj => {
    // console.log('postContactsApi-obj: ', obj);
    // console.log('postContactsApi-obj.data: ', obj.data);
    return obj.data;
  });
};
export const deleteContactsApi = id => {
  return axios.delete('/contacts/' + id);
};
export const getCurrentUserApi = localToken => {
  axios.defaults.baseURL = URL.AUTH;
  token.set(localToken);
  return axios.get(ENDPOINT.CUR_USER).then(res => res);
};
