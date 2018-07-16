import React from 'react';
import NavbarContainer from './navbar/logged_in_nav/navbar_container';
// import Sidebar from './sidebar/sidebar_container';


const TeamShow = ({ match }) => {
  return (
    <NavbarContainer team={match.params.teamId}/>
  )
};

export default TeamShow;
