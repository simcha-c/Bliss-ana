import React from 'react';
import Modal from '../modal/modal';

const Navbar = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="header-button" onClick={() => openModal('Log In')}>Login</button>
      &nbsp;or&nbsp;
      <button className="sign-up" onClick={() => openModal('Sign Up')}>Signup</button>
      <Modal />
    </nav>
  );
  const personalNavbar = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {`${currentUser.first_name} ${currentUser.last_name}`}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
    personalNavbar(currentUser, logout) :
    sessionLinks()
  );
};

export default Navbar;
