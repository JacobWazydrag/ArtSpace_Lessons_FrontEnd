import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import artistActions from '../redux/actions.js';

const Signup = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
    first_name: "",
    last_name: "",
    instagram_url: "",
    facebook_url: "",
    phone_number: "",
    email: "",
    bio: "",
    profile_photo: ""
  });

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(artistActions.newArtistToDB(signupForm));
    history.push('/');
  };

  // Destructuring keys from our local state to use in the form
  const { username, password, first_name, last_name, bio, email, profile_photo, phone_number, instagram_url, facebook_url } = signupForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="first_name"
        name="first_name"
        value={first_name}
        onChange={handleChange}
        placeholder="first_name"
      />
      <input
        type="last_name"
        name="last_name"
        value={last_name}
        onChange={handleChange}
        placeholder="last_name"
      />
      <input
        type="instagram_url"
        name="instagram_url"
        value={instagram_url}
        onChange={handleChange}
        placeholder="instagram_url"
      />
      <input
        type="facebook_url"
        name="facebook_url"
        value={facebook_url}
        onChange={handleChange}
        placeholder="facebook_url"
      />
      <input
        type="phone_number"
        name="phone_number"
        value={phone_number}
        onChange={handleChange}
        placeholder="phone_number"
      />
      <input
        type="bio"
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
      />
      <input
        type="profile_photo"
        name="profile_photo"
        value={profile_photo}
        onChange={handleChange}
        placeholder="profile_photo"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="email"
      />
      <input type="submit" />
    </form>
  );
};

export default Signup;