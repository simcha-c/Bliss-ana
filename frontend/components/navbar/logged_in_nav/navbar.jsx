import React from 'react';
import Modal from '../../modal/modal';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.avatar = this.avatar.bind(this);
    this.profileDropdown = this.profileDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  toggleHiddenClassAside() {
    const sidebar = document.getElementById('hamburger-aside')
    const hambuger = document.getElementById('hambuger-menu-box')
    hambuger.classList.toggle("hidden")
    sidebar.classList.toggle("aside-hidden")
  }

  hamburger() {
    return (
      <div onClick={this.toggleHiddenClassAside} id="hambuger-menu-box">
        <div className="hambuger-menu-icon"></div>
        <div className="hambuger-menu-icon"></div>
        <div className="hambuger-menu-icon"></div>
      </div>
    )
  };

  toggleHiddenClassProfile() {
    const menu = document.getElementById('user-profile-info')

    menu.classList.toggle("hidden")
  }

  avatar(){
    const initials = `${this.props.currentUser.first[0].toUpperCase()}${this.props.currentUser.last[0].toUpperCase()}`

    let firstTeam;
    if (Object.keys(this.props.teams).length === 0){
      firstTeam = {name: ''};

    } else {
      firstTeam = this.props.teams[this.props.team];
    }

    return (
      <section className="avatar" onClick={this.toggleHiddenClassProfile}>
        <div className="link">{firstTeam.name}</div>
        <div className="circle" >{initials}</div>
      </section>
    )
  }

  profileDropdown() {
    const allTeams = Object.values(this.props.teams).map((team, idx) => {
      return <Link to={`/team/${team.id}`}>
        <li key={idx} className="avatar-link" onClick={this.toggleHiddenClassProfile}> {team.name}</li>
      </Link>
    })

    return (
      <div id="user-profile-info" className="hidden">
        <aside id="avatar-menu">
          <section className="avatar-section">
            <ul className="avatar-list">
              {allTeams}
            </ul>
          </section>
          <section className="avatar-section">
            <ul className="avatar-list">
              <li className="avatar-link">My Profile Settings...</li>
              <li className="avatar-link">{this.logoutButton()}</li>
            </ul>
          </section>
        </aside>
      </div>
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
      <button className="logout-button" onClick={this.props.logout}>Log Out</button>
    );
  }

  render() {
    return (
      <div className="navbar">
        <nav className="logged_nav">
          {this.hamburger()}
          <section className="right-nav" >
            {this.links()}
            {this.avatar()}
          </section>
        </nav>
        {this.profileDropdown()}
      </div>
    );
  }

}

export default Navbar;
