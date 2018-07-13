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

  const avatar = () => (
    <secion className="avatar">
      <div className="team-name">Engineering 101</div>
      <div className="circle">SC</div>
    </secion>
  );

  const links = () => (
    <secion className="links">
      <a className="link" href="" >My Tasks</a>
      <a className="link" href="" >Inbox</a>
      <a className="link" href="" >Dashboard</a>
    </secion>
  );

  return (
    <nav className="logged_nav">
      {hamburger()}
      <section className="right-nav" >
        {links()}
        {avatar(currentUser, logout)}
      </section>
    </nav>
  );

}

export default Navbar;
