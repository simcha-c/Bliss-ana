import React from 'react';
import Modal from '../../modal/modal';

const Navbar = ({ currentUser, logout, openModal }) => {
  const logo = () => (
    <div className="logo">
      <img src={window.logo} />
      <span>bliss-ana</span>
    </div>
  );

  const sessionLinks = () => (
    <div className="login-signup">
      <button className="header-button" onClick={() => openModal('Log In')}>Log In</button>
      <button className="box-button" onClick={() => openModal('Sign Up')}>Get Started</button>
      <Modal />
    </div>
  );

  return (
    <nav className="logging-nav">
      {logo()}
      {sessionLinks()}
    </nav>
  );

};

export default Navbar;
