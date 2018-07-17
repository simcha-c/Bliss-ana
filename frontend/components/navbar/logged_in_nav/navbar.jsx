import React from 'react';
import Modal from '../../modal/modal';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    const randomTeam = this.props.teams[Object.keys(this.props.teams)[0]];
    this.activeTeam = parseInt(this.props.team) || randomTeam;

    this.avatar = this.avatar.bind(this);
    this.profileDropdown = this.profileDropdown.bind(this);
    this.toggleHiddenClassAside = this.toggleHiddenClassAside.bind(this);
    this.sidebarHeader = this.sidebarHeader.bind(this);

    this.state = { aside: 'aside-hidden', hambuger: '' };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
    this.props.fetchTeam(this.props.team);
  }

  componentDidUpdate(prevProps) {
    if (this.props.team !== prevProps.team) {
      this.props.fetchUser(this.props.currentUser.id);
      this.props.fetchTeam(this.props.team);
    }
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.team !== newProps.team) {
  //     this.props.fetchUser(this.props.currentUser.id);
  //     this.props.fetchTeam(this.props.team);
  //   }
  // }

  toggleHiddenClassAside() {
    if (this.state.aside === 'aside-hidden') {
      this.setState({ hambuger: 'hidden', aside: '' });
    } else {
      this.setState({ hambuger: '', aside: 'aside-hidden' });
    }
  }

  sidebarHeader() {
    return (
      <header className="sidebar-header">
        <div className="sidebar-logo">
          <img className="sidebar-logo-img" src={window.logo} />
          <span>bliss-ana</span>
        </div>
        <div onClick={this.toggleHiddenClassAside} className="close">×</div>
      </header>
    );
  }

  sidebar() {
    return (
      <div id="hamburger-aside" className={this.state.aside}>
        <aside className="sidebar">
          {this.sidebarHeader()}
        </aside>
      </div>
    );
  }

  hamburger() {
    return (
      <div onClick={this.toggleHiddenClassAside} className={this.state.hambuger} id="hambuger-menu-box">
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
      firstTeam = this.props.teams[this.props.team];
    }

    return (
      <section className="avatar" onClick={this.props.openDropdown}>
        <div className="link">{firstTeam.name}</div>
        <div className="circle" >{initials}</div>
      </section>
    )
  }

  profileDropdown() {
    const randomTeam = this.props.teams[Object.keys(this.props.teams)[0]];
    const activeTeam = parseInt(this.props.team) || randomTeam;

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
              <button onClick={() => this.props.openModal('Workspace Settings')} className="avatar-link">Edit Workspace</button>
              <button onClick={() => this.props.deleteTeam(this.props.team)} className="avatar-link">Remove me from this Workspace</button>
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
      <div className="team-show">
        {this.sidebar()}
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
      </div>
    );
  }

}

export default Navbar;
