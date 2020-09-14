import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import studentActions from '../redux/actions';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(studentActions.logoutStudent());
  };
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Link to="/">Home</Link>
      <Link to="/student_signup">Student Signup</Link>
      <Link to="/artist_signup">artist Signup</Link>
      <Link to="/student_login">Student Login</Link>
      <Link to="/artist_login">artist Login</Link>
      <Link to="/" onClick={handleLogout}>
        Student Logout
      </Link>
    </nav>
  );
};

export default Nav;