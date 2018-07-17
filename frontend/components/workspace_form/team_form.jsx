import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class TeamForm extends React.Component {
  constructor(props) {
    super(props);

    const ownProp = this.props.location.pathname;
    const teamId = ownProp.substr(ownProp.lastIndexOf('/') + 1)
    const formInputs = {
      name: '',
      id: `${teamId}`
    };
    this.state = merge(formInputs, props.form);
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
    const team = Object.assign({}, this.state);
    this.props.processForm(team).then(() => {
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
      let submitName;
      if (this.props.formType === 'Create Your Workspace') {
        submitName = "Create Workspace";
      } else if (this.props.formType === 'Workspace Settings') {
        submitName = "Update Workspace";
      }

      return (
        <div className="form-container-team">
          <div className="x-title-team">
            <p id="modal-header-team"> {this.props.formType} </p>
            <div onClick={this.props.closeModal} className="close-x-team">×</div>
          </div>
          {this.renderErrors()}

          <form className="team-form" onSubmit={this.handleSubmit}>

            <label>
              <p className="team-text">Workspace Name</p>
              <input required type="text" value={this.state.name} placeholder="Company or Team Name"
                onChange={this.update('name')} className="team-input" />
            </label>

            <input className="team-submit" type="submit" value={submitName} />
          </form>

        </div>
      )
    }
  }

  export default withRouter(TeamForm);
