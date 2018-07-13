import React from 'react';
import Modal from '../../modal/modal';

const Navbar = ({ currentUser, logout, openModal }) => {
  const hamburger = () => (
    <div className="hambuger-menu-box">
      <div className="hambuger-menu-icon"></div>
      <div className="hambuger-menu-icon"></div>
      <div className="hambuger-menu-icon"></div>
    </div>
  );

  const initials = `${currentUser.first[0].toUpperCase()}${currentUser.last[0].toUpperCase()}`

  const avatar = () => (
    <section className="avatar">
      <div className="link">Engineering 101</div>
      <div className="circle">{initials}</div>
    </section>
  );

  const links = () => (
    <section className="links">
      <a className="link" href="" >My Tasks</a>
      <a className="link" href="" >Inbox</a>
      <a className="link" href="" >Dashboard</a>
    </section>
  );

  const logoutButton = () => (
    <button className="link" onClick={logout}>Log Out</button>
  );

  return (
    <nav className="logged_nav">
      {hamburger()}
      <section className="right-nav" >
        {links()}
        {logoutButton()}
        {avatar(currentUser, logout)}
      </section>
    </nav>
  );

}

export default Navbar;
