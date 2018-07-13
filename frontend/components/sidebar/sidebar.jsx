import React from 'react';

// const Navbar = (props) => {
//
// };

class Sidebar extends React.Component {

  

  sidebarHeader(){
    return (
      <header className="sidebar-header">
        <header className="logo">
          <img src={window.logo} />
          <span>bliss-ana</span>
        </header>
        <div className="close-x">×</div>
      </header>
    );
  }

  render() {
    return (
      <aside className="sidebar">
        {sidebarHeader()}
      </aside>
    );
  }

}

export default Sidebar;
