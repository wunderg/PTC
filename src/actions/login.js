import axios from 'axios';
import * as ACTIONS from './constants';

function requestSignup(creds) {
  return {
    type: ACTIONS.SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function recieveSignup(user) {
  return {
    type: ACTIONS.SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.data.id_token
  };
}


function signupError(message) {
  return {
    type: ACTIONS.SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function signupUser(creds, dispatch) {
  return () => {
    dispatch(requestSignup(creds));
    return axios.post('api/signup', creds)
      .then(res => dispatch(recieveSignup(res)))
      .catch(err => dispatch(signupError(err)));
  };
}

function requestLogin(creds) {
  return {
    type: ACTIONS.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function recieveLogin(user) {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.data.id_token
  };
}


function loginError(message) {
  return {
    type: ACTIONS.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function loginUser(creds, dispatch) {
  return () => {
    dispatch(requestLogin(creds));
    return axios.post('api/login', creds)
      .then(res => dispatch(recieveLogin(res)))
      .catch(err => dispatch(loginError(err)));
  };
}