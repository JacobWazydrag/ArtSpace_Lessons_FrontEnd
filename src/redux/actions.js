// API CONSTANTS

const BASE_URL = 'http://localhost:3000';
const STUDENTS_URL = BASE_URL + '/students';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_STUDENT_URL = id => STUDENTS_URL + '/' + id;

// Redux Actions

const setStudentAction = studentObj => ({
  type: 'SET_STUDENT',
  payload: studentObj
});

const clearStudentAction = () => ({
  type: 'CLEAR_STUDENT'
});

// Fetch

const newStudentToDB = studentObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(studentObj)
  };
  fetch(STUDENTS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setStudentAction(data.student));
      localStorage.setItem('token', data.token);
    });
};

const deleteStudentFromDB = studentId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_STUDENT_URL(studentId), config).then(r => {
    dispatch(clearStudentAction());
    localStorage.clear();
  });
};

const loginStudentToDB = studentCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(studentCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setStudentAction(data.student));
      localStorage.setItem('token', data.token);
    });
};

const persistStudent = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(studentInstance => {
      dispatch(setStudentAction(studentInstance));
    });
};

const logoutStudent = () => dispatch => {
  dispatch(clearStudentAction());
  localStorage.clear();
};

export default {
  newStudentToDB,
  deleteStudentFromDB,
  loginStudentToDB,
  persistStudent,
  logoutStudent
};