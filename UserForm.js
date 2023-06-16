import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName, setEmail } from './userActions';

function UserForm({ onNext }) {
  const [name, setNameInput] = useState('');
  const [email, setEmailInput] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(name));
    dispatch(setEmail(email));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default UserForm;
