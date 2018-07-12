import React from 'react';
import Modal from '../modal/modal';

const Navbar = ({ currentUser, logout, openModal }) => {
  const logo = () => (
    <div className="logo" onClick="/">
      <img src={window.logo} />
      <span>bliss-ana</span>
    </div>
  )

  const sessionLinks = () => (
    <div className="login-signup">
      <button className="header-button" onClick={() => openModal('Log In')}>Log In</button>
      <button className="box-button" onClick={() =>              openModal('Sign Up')}>Get Started</button>
      <Modal />
    </div>
  );
  const personalNavbar = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {`${currentUser.first_name}`}!</h2>
      <button className="box-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  if (currentUser) {
    return (
      <nav>
        {logo()}
        {personalNavbar(currentUser, logout)}
      </nav>
    )
  } else {
    return (
      <nav>
        {logo()}
        {sessionLinks()}
      </nav>
    )
  }
};

export default Navbar;
