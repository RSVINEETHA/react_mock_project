import React from 'react';

function UserProfile({ username, email }) {
  return (
    <div className='page-content'>
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {username}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
    </div>
  );
}

export default UserProfile;
