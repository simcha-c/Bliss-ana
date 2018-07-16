import React from 'react';
import NavbarContainer from './navbar/logged_in_nav/navbar_container';
import Sidebar from './sidebar/sidebar_container';


const TeamShow = ({ match }) => {
  return (
    <div className="team-show">
      <Sidebar />
      <NavbarContainer team={match.params.teamId}/>
    </div>
  )
};

export default TeamShow;
