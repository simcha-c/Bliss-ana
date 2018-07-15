import React from 'react';
import Modal from '../../modal/modal';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = props.currentUser;
    this.logout = props.logout;
    this.openModal = props.openModal;
    this.team = props.team;

    this.avatar = this.avatar.bind(this);
  }

  componentDidMount() {
    const temp = 0;
    this.props.fetchUser(this.currentUser.id)
  }

  hamburger() {
    return (
      <div className="hambuger-menu-box">
        <div className="hambuger-menu-icon"></div>
        <div className="hambuger-menu-icon"></div>
        <div className="hambuger-menu-icon"></div>
      </div>
    )
  };

  avatar(){
    const initials = `${this.currentUser.first[0].toUpperCase()}${this.currentUser.last[0].toUpperCase()}`
    return (
      <section className="avatar">
        <div className="link">{this.team.name}</div>
        <div className="circle">{this.initials}</div>
      </section>
    )
  }

  links() {
    return (
      <section className="links">
        <a className="link" href="" >My Tasks</a>
        <a className="link" href="" >Inbox</a>
        <a className="link" href="" >Dashboard</a>
      </section>
    )
  }

  logoutButton() {
    return (
      <button className="link" onClick={this.logout}>Log Out</button>
    );
  }

  render() {
    return (
      <nav className="logged_nav">
        {this.hamburger()}
        <section className="right-nav" >
          {this.links()}
          {this.logoutButton()}
          {this.avatar()}
        </section>
      </nav>
    );
  }

}

export default Navbar;

// const Navbar = ({ currentUser, logout, openModal, team }) => {
//   const hamburger = () => (
//     <div className="hambuger-menu-box">
//       <div className="hambuger-menu-icon"></div>
//       <div className="hambuger-menu-icon"></div>
//       <div className="hambuger-menu-icon"></div>
//     </div>
//   );
//
//   const initials = `${currentUser.first[0].toUpperCase()}${currentUser.last[0].toUpperCase()}`
//
//   const avatar = () => (
//     <section className="avatar">
//       <div className="link">{team.name}</div>
//       <div className="circle">{initials}</div>
//     </section>
//   );
//
//   const links = () => (
//     <section className="links">
//       <a className="link" href="" >My Tasks</a>
//       <a className="link" href="" >Inbox</a>
//       <a className="link" href="" >Dashboard</a>
//     </section>
//   );
//
//   const logoutButton = () => (
//     <button className="link" onClick={logout}>Log Out</button>
//   );
//
//   return (
//     <nav className="logged_nav">
//       {hamburger()}
//       <section className="right-nav" >
//         {links()}
//         {logoutButton()}
//         {avatar(currentUser, logout)}
//       </section>
//     </nav>
//   );
//
// }
