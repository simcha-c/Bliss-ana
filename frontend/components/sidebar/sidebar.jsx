import React from 'react';


class Sidebar extends React.Component {

  toggleHiddenClassAside() {
    const sidebar = document.getElementById('hamburger-aside')
    const hambuger = document.getElementById('hambuger-menu-box')

    hambuger.classList.toggle("hidden")
    sidebar.classList.toggle("aside-hidden")
  }

  sidebarHeader() {
    return (
      <header className="sidebar-header">
        <div className="sidebar-logo">
          <img className="sidebar-logo-img" src={window.logo} />
          <span>bliss-ana</span>
        </div>
        <div onClick={this.toggleHiddenClassAside} className="close">×</div>
      </header>
    );
  }

  render() {
    return (
      <div id="hamburger-aside" className="aside-hidden">
        <aside className="sidebar">
          {this.sidebarHeader()}
        </aside>
      </div>
    );
  }

}

export default Sidebar;
