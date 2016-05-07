import axios from 'axios';
import * as ACTIONS from './constants';

export function addStudent(student) {
  const nextId = Math.floor(Math.random() * 100);
  const data = {
    _id: nextId,
    lesson: 0,
    level: 0,
    interview: 'not set',
    decision: 'pending',
    contacted: '',
    name: student.name,
    email: student.email
  };

  axios.post(`api/student`, data)
  .then(res => console.log(res))
  .then(err => console.log(err));
  return {
    type: ACTIONS.ADD_STUDENT,
    payload: data
  };
}

export function selectStudent(student) {
  return {
    type: ACTIONS.SELECT_STUDENT,
    payload: student
  };
}

export function updateStudent(student) {
  axios.put(`api/student`, student);
  return {
    type: ACTIONS.UPDATE_STUDENT,
    payload: student
  };
}

function requestFetchStudents() {
  return {
    type: ACTIONS.FETCH_STUDENTS_REQUEST,
  };
}

function fetchStudentsSuccess(data) {
  return {
    type: ACTIONS.FETCH_STUDENTS_SUCCESS,
    data
  };
}

function fetchStudentFail(message) {
  return {
    type: ACTIONS.FETCH_STUDENTS_FAILURE,
    message
  };
}

export function fetchStudents() {
  const token = localStorage.getItem('id_token') || null;

  const config = {
    headers: { Authorization: token }
  };

  return dispatch => {
    dispatch(requestFetchStudents());
    return axios.get(`api/students`, config)
    .then(res => dispatch(fetchStudentsSuccess(res)))
    .catch(err => dispatch(fetchStudentFail(err)));
  };
}
