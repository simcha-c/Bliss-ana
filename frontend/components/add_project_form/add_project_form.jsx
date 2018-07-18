import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class AddProjectForm extends React.Component {
  constructor(props) {
    super(props);
    const ownProp = this.props.location.pathname;
    const teamId = ownProp.substr(ownProp.lastIndexOf('/') + 1);
    this.state = { name: "", team_id: `${teamId}` };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.createProject(this.state).then(() => {
      this.props.closeModal();
    }, this.renderErrors);
  }

  renderErrors() {
    const errors = Object.values(this.props.errors);
    let allErrors = errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
      });

      return(
        <ul>
          {allErrors}
        </ul>
      );

    }

    render() {

      return (
        <div className="form-container-team">
          <div className="x-title-team">
            <p id="modal-header-team"> {this.props.formType} </p>
            <div onClick={this.props.closeModal} className="close-x-team">×</div>
          </div>
          {this.renderErrors()}

          <form className="team-form" onSubmit={this.handleSubmit}>

            <label>
              <p className="team-text">Project Name</p>
              <input required type="text" value={this.state.name} placeholder=""
                onChange={this.update('name')} className="team-input" />
            </label>

            <input className="team-submit" type="submit" value="Create Project" />
          </form>

        </div>
      )
    }
  }

  export default withRouter(AddProjectForm);
