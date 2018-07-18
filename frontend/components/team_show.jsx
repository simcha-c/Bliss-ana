import React from 'react';
import NavbarContainer from './navbar/logged_in_nav/navbar_container';
import SidebarContainer from './sidebar/sidebar_container';
import ProjectInfoContainer from './project_info/project_info_container';


const TeamShow = ({ match }) => {
  return (
      <div className="team-show">
        <SidebarContainer />
        <div className="wrapper">
          <NavbarContainer team={match.params.teamId}/>
          
          <ProjectInfoContainer />
        </div>
      </div>
  )
};

export default TeamShow;
