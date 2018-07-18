import React from 'react';
import { Link } from 'react-router-dom';

class ProjectHeader extends React.Component {

  render() {
    return (
      <header className="project-header">
        <p className="project-title">{this.props.project.name}</p>
      </header>
    )
  }

}

export default ProjectHeader;
