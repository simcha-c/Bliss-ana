import React from 'react';


class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.sidebarHeader = this.sidebarHeader.bind(this);
    this.projectsList = this.projectsList.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
    .then(this.props.fetchTeam(this.props.team.id));
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.team.project_ids.length !== prevProps.team.project_ids.length) {
  //     this.props.fetchUser(this.props.currentUser.id)
  //     .then(this.props.fetchTeam(this.props.team));
  //   }
  // }

  sidebarHeader() {
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
    if (this.props.team.project_ids === undefined || Object.keys(this.props.projects).length === 0) {
      return null;
    } else {
      const projects = this.props.team.project_ids.map(id => {
        return this.props.projects[id];
      });
      const projectsInfo = Object.values(this.props.projects).map((project) => {
        return <li className="link" key={project.id}>{project.name}</li>
      });

      return (
        <ul className="project-list">
          {projectsInfo}
        </ul>
      );
    }
  }

  render() {
    const visible = this.props.sidebar ? '' : 'aside-hidden';

    return (
      <div id="hamburger-aside" className={visible}>
        <aside className="sidebar">
          {this.sidebarHeader()}
          <div className="sidebar-content">
            <section className="sidebar-section">
              <p className="content-header">Projects</p>
              {this.projectsList()}
            </section>
          </div>
        </aside>
      </div>
    );
  }

}

export default Sidebar;
