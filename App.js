import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Introduction from './Introduction';
import Team from './Team';
import WhatWeDo from './WhatWeDo';
import UserProfile from './UserProfile';
import UserForm from './UserForm';
import SignInForm from './SignInForm';
import store from './store';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Introduction');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSignIn = (token) => {
    setIsSignedIn(true);
    localStorage.setItem('token', token);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  const PrivateRoute = ({ element, path }) => {
    return isSignedIn ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/signin" replace={true} />
    );
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
          <div className="background-image">
            <div className="pt-5 container-fluid">
              <div className="row">
                <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                  <Routes>
                    <Route path="/" element={<Introduction />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/about" element={<WhatWeDo />} />
                    <Route
                      path="/signin"
                      element={<SignInForm onSignIn={handleSignIn} />}
                    />
                    <Route
                      path="/profile"
                      element={
                        isSignedIn ? (
                          <UserProfile />
                        ) : (
                          <Navigate to="/signin" replace={true} />
                        )
                      }
                    />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
