import React from 'react';
import NavbarContainer from './navbar/logged_in_nav/navbar_container';
import SidebarContainer from './sidebar/sidebar_container';
import ProjectInfoContainer from './project_info/project_info_container';
import ProjectHeaderContainer from './project_info/project_header_container';

const TeamShow = ({ match }) => {

  const projects = (match.params.projectId) ? <ProjectInfoContainer /> : <div className="project-page" />;

  return (
      <div className="team-show">
        <SidebarContainer />
        <div className="wrapper">
          <div className="nav-wrapper">
            <NavbarContainer team={match.params.teamId} />
            <ProjectHeaderContainer />
          </div>
            {projects}
        </div>
      </div>
  )
};

export default TeamShow;
