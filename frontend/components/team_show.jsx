import React from 'react';
import NavbarContainer from './navbar/logged_in_nav/navbar_container';
import SidebarContainer from './sidebar/sidebar_container';


const TeamShow = ({ match }) => {
  return (
    <div className="team-show">
      <SidebarContainer />
      <NavbarContainer team={match.params.teamId}/>
    </div>
  )
};

export default TeamShow;
