import React from 'react';
import Modal from '../modal/modal';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {id: 0};

    this.sidebarHeader = this.sidebarHeader.bind(this);
    this.projectsList = this.projectsList.bind(this);
    this.memberList = this.memberList.bind(this);
    this.removeProject = this.removeProject.bind(this);
    this.handleRemoveProject = this.handleRemoveProject.bind(this);
    this.toggleOptionsPopout = this.toggleOptionsPopout.bind(this);
    this.memberHoverBox = this.memberHoverBox.bind(this);
  }

// with the fetchUser - 21 queries. Without - 16.
  // componentDidMount() {
    // this.props.fetchUser(this.props.currentUser.id)
    // .then
    // (this.props.fetchTeam(this.props.team.id));
  // }

// with this - 21 queries. without 15. However, do need it.
// otherwise, dont get the column info when click on project.
  // componentWillUpdate(nextProps) {
  //
  //   if (this.props.project.id !== nextProps.project.id) {
  //
  //     this.props.fetchProject(nextProps.project.id);
  //   }
  // }

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

  handleRemoveProject(projectId) {
    this.props.deleteProject(projectId).then(() => this.props.history.push(`/teams/${this.props.team.id}`));
  }

  removeProject(projectId) {
    let visible;
    visible = (this.state.id === projectId) ? "" : "hidden";

    return (
      <div className={`options-popup ${visible}`}>
        <button id={projectId} className="remove-project" onClick={() => this.handleRemoveProject(projectId)}>Delete Project</button>
        <div onClick={(e) => this.toggleOptionsPopout()} className="full-page-div"> </div>
      </div>
    )
  }

  toggleOptionsPopout(id) {
    event.stopPropagation();
    if (this.state > 0) {
      this.setState({ id: 0 });
    } else {
      this.setState({ id: id });
    }
  }

  projectsList() {
    const projectId = this.props.match.params.projectId;
    const projectsInfo = this.props.projects.map((project) => {
      const active = (project.id === parseInt(projectId)) ? "active-project" : "";
      return (
        <div key={project.id} className="with-popup">
          <div className={`project-info ${active}`}>
            <Link to={`/teams/${project.team_id}/projects/${project.id}`} className="sidebar-link" >
              {project.name}
            </Link>
            <span onClick={() => this.toggleOptionsPopout(project.id)} className="more-options">
              <div className="small-circle"></div><div className="small-circle"></div><div className="small-circle"></div>
            </span>
          </div>
          {this.removeProject(project.id)}
        </div>
      )
    });

    return (
      <ul className="project-list">
        {projectsInfo}
      </ul>
    );
  }

  memberHoverBox(user) {
    if (user.first === " ") { return }
    return (
      <section key={user.id}>
        <p className="hover-name">{user.first} {user.last}</p>
      </section>
    )
  }

  memberList() {
    const membersInfo = this.props.users.map((user) => {
      const initials = `${user.first[0]}${user.last[0]}`;
      const hoverBox = this.memberHoverBox(user);
      return (
        <section className="member-initials" key={user.id}>
          <div className="circle" >{initials}</div>
          <div className="member-hover-box">{hoverBox}</div>
        </section>
      );
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
