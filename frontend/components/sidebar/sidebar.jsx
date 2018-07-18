import React from 'react';
import Modal from '../modal/modal';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { moreOptions: 'hidden' };

    this.sidebarHeader = this.sidebarHeader.bind(this);
    this.projectsList = this.projectsList.bind(this);
    this.memberList = this.memberList.bind(this);
    this.removeProject = this.removeProject.bind(this);
    this.handleRemoveProject = this.handleRemoveProject.bind(this);
    this.toggleOptionsPopout = this.toggleOptionsPopout.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
    .then(this.props.fetchTeam(this.props.team.id));
  }

  // componentWillUpdate(nextProps) {
  //   if (this.props.projects.length !== nextProps.projects.length) {
  //     this.props.fetchUser(this.props.currentUser.id);
  //     this.props.fetchTeam(this.props.team.id);
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

  handleRemoveProject(e) {
    this.props.deleteProject(e.currentTarget.id)
  }

  removeProject(projectId) {
    return (
      <div className={`options-popup ${this.state.moreOptions}`}>
        <div onClick={() => this.toggleOptionsPopout()} className="full-page-div"> </div>
        <button id={projectId} className="remove-project" onClick={this.handleRemoveProject}>Delete Project</button>
      </div>
    )
  }

  toggleOptionsPopout(e){
    debugger
    if (this.state.moreOptions === 'hidden') {
      this.setState({moreOptions: ""});
    } else {
      this.setState({moreOptions: 'hidden'});
    }
  }

  projectsList() {
    const projectsInfo = this.props.projects.map((project) => {
      return (
        <div className="with-popup">
          <div key={project.id} className="project-info">
            <li className="sidebar-link" >
              {project.name}
            </li>
            <span onClick={(e) => this.toggleOptionsPopout()} className="more-options">
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
