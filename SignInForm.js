import React, { useState , useEffect} from 'react';
import axios from 'axios';
function SignInForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (username.trim() === '' || email.trim() === '') {
      alert('Username and Email are required!');
      return;
    }
  
    try {
      // Make the sign-in request to your backend server
      const response = await axios.post('your-login-endpoint', { username, email });
      const { token } = response.data;
  
      // Store the token in local storage
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  
    // Update the state to indicate successful sign-in
    setIsSubmitted(true);
  };
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsSubmitted(true);
    }
  }, []);
  
  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Sign In Successful!</h3>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default SignInForm;
