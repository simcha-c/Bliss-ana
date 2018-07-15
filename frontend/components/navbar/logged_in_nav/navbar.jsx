import React from 'react';
import Modal from '../../modal/modal';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.avatar = this.avatar.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchUser(this.props.currentUser.id)
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
    const initials = `${this.props.currentUser.first[0].toUpperCase()}${this.props.currentUser.last[0].toUpperCase()}`

    let firstTeam;
    if (Object.keys(this.props.teams).length === 0){
      firstTeam = {name: ''};

    } else {
      firstTeam = this.props.teams[Object.keys(this.props.teams)[0]];
    }

    return (
      <section className="avatar">
        <div className="link">{firstTeam.name}</div>
        <div className="circle">{initials}</div>
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
      <button className="link" onClick={this.props.logout}>Log Out</button>
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
