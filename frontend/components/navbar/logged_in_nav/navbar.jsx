import React from 'react';
import Modal from '../../modal/modal';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.avatar = this.avatar.bind(this);
    this.profileDropdown = this.profileDropdown.bind(this);
  }

  componentDidMount() {
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

  toggleHiddenClass() {
    const menu = document.getElementById('user-profile-info')
    menu.classList.toggle("hidden")
  }

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
        <div className="circle" onClick={this.toggleHiddenClass} >{initials}</div>
      </section>
    )
  }

  profileDropdown() {
    const allTeams = Object.values(this.props.teams).map((team, idx) => {
      return <li key={idx} className="avatar-link"> {team.name}</li>
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
      <div>
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
