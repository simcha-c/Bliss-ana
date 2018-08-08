import React from 'react';
import Modal from '../../modal/modal';
import { Link } from 'react-router-dom';
import SidebarContainer from '../../sidebar/sidebar_container';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.avatar = this.avatar.bind(this);
    this.profileDropdown = this.profileDropdown.bind(this);
    this.removeTeam = this.removeTeam.bind(this);

  }

// with fetchUser -> 26 queries. without - 21. dont need.
  componentDidMount() {
    // this.props.fetchUser(this.props.currentUser.id);
    debugger
    this.props.fetchTeam(this.props.teamId);
  }

// need this since the projects need to be updated for each team.
  componentDidUpdate(prevProps) {
    if (this.props.teamId !== prevProps.teamId) {
      debugger
      // this.props.fetchUser(this.props.currentUser.id);
      this.props.fetchTeam(this.props.teamId);
    }
  }

  hamburger() {
    const visible = this.props.sidebar ? 'hidden' : '';
    return (
      <div onClick={this.props.openSidebar} className={visible} id="hambuger-menu-box">
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
      firstTeam = this.props.teams[this.props.teamId];
    }
    return (
      <section className="avatar" onClick={this.props.openDropdown}>
        <div className="link">{firstTeam.name}</div>
        <div className="circle" >{initials}</div>
      </section>
    )
  }

  removeTeam() {
    this.props.deleteTeam(this.props.teamId).then(this.props.history.push('/'));
  }

  profileDropdown() {
    // const randomTeam = this.props.teams[Object.keys(this.props.teams)[0]];
    const activeTeam = this.props.teamId;

    const allTeams = Object.values(this.props.teams).map((team) => {
      let active
      if (activeTeam === team.id) {
        active = 'active';
      } else {
        active = "";
      }

      return <Link key={team.id} to={`/teams/${team.id}`}>
        <li id={active} className="avatar-link" onClick={this.props.openDropdown}>{team.name}</li>
      </Link>
    })

    const teamInfo = this.props.teams[this.props.teamId]
    const visible = this.props.dropdown ? '' : 'hidden';
    return (
      <div id="user-profile-info" className={`${visible}`} >
        <aside id="avatar-menu">
          <section className="avatar-section">
            <ul className="avatar-list">
              {allTeams}
            </ul>
          </section>

          <section className="avatar-section">
            <ul className="avatar-list">
              <button onClick={() => this.props.openModal('Create New Workspace')} className="avatar-link">Create New Workspace</button>
              <button onClick={() => this.props.openModal('Workspace Settings', teamInfo)} className="avatar-link">Edit Workspace</button>
              <button onClick={this.removeTeam} className="avatar-link">Remove me from this Workspace</button>
            </ul>
          </section>

          <section className="avatar-section">
            <ul className="avatar-list">

              <li className="avatar-link">{this.logoutButton()}</li>
            </ul>
          </section>

        </aside>
      </div>
    )
  }

  links() {
    // return (
    //   <section className="links">
    //     <a className="link" href="" >My Tasks</a>
    //     <a className="link" href="" >Inbox</a>
    //     <a className="link" href="" >Dashboard</a>
    //   </section>
    // )
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
