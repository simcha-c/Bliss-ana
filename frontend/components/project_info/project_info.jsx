import React from 'react';
import { Link } from 'react-router-dom';

class ProjectInfo extends React.Component {

  render() {
    return (
      <div>
        {this.props.team.name}
      </div>
    );
  }

}

export default ProjectInfo;
