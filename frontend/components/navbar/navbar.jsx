import React from 'react';
import Modal from '../modal/modal';

const Navbar = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
      <Modal />
    </nav>
  );
  const personalNavbar = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.full_name}!</h2>
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
