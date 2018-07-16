import React from 'react';
import NavbarContainer from './navbar/logged_in_nav/navbar_container';
import Sidebar from './sidebar/sidebar_container';


const TeamShow = () => {
  return (
    <div className="team-show">
      <Sidebar />
      <NavbarContainer />
    </div>
  )
};

export default TeamShow;
