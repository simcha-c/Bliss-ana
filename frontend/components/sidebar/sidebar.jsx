import React from 'react';
import Modal from '../modal/modal';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.sidebarHeader = this.sidebarHeader.bind(this);
    this.projectsList = this.projectsList.bind(this);
    this.memberList = this.memberList.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
    .then(this.props.fetchTeam(this.props.team.id));
  }

  componentDidUpdate(prevProps) {
    if (this.props.team.length !== prevProps.team.length) {
      this.props.fetchUser(this.props.currentUser.id);
      this.props.fetchTeam(this.props.team.id);
    }
  }

  sidebarHeader(){
    return (
      <header className="sidebar-header">
        <div className="sidebar-logo">
          <img className="sidebar-logo-img" src={window.logo} />
          <span>bliss-ana</span>
        </div>
        <div onClick={this.props.closeSidebar} className="close">×</div>
      </header>
    );
  }

  projectsList() {
    const projectsInfo = this.props.projects.map((project) => {
      return <li className="sidebar-link" key={project.id}>{project.name}</li>
    });

    return (
      <ul className="project-list">
        {projectsInfo}
      </ul>
    );
  }

  memberList() {
    const membersInfo = this.props.users.map((user, idx) => {
      let initials = "";
      initials = `${user.first[0]}${user.last[0]}`;
      return <div key={idx} className="circle" >{initials}</div>
    });

    return (
      <ul className="member-list">
        {membersInfo}
      </ul>
    );
  }

  render() {
    const visible = this.props.sidebar ? '' : 'aside-hidden';
    return (
      <div id="hamburger-aside" className={visible}>
        <aside className="sidebar">
          {this.sidebarHeader()}
          <div className="sidebar-content">
            <section className="sidebar-section">
              <p className="content-header">Members</p>
              {this.memberList()}
            </section>
            <section className="sidebar-section">
              <div className="section-title-add">
                <p className="content-header">Projects</p>
                <button onClick={() => this.props.openModal('Add Project')} className="add">+</button>
              </div>
              {this.projectsList()}
            </section>
          </div>
        </aside>
      </div>
    );
  }

}

export default Sidebar;
