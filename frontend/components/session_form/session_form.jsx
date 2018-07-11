import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="x-title">
          <span id="modal-header">{this.props.formType}</span>

          <div onClick={this.props.closeModal} className="close-x">×</div>

        </div>

        {this.renderErrors()}

        <div className="login-form">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <label>
              <p>Email Address</p>
              <input type="text" value={this.state.email}
                onChange={this.update('email')} className="login-input" />
            </label>

            <label>
              <p>Password</p>
              <input type="password" value={this.state.password}
                onChange={this.update('password')} className="login-input" />
            </label>

            <input className="session-submit" type="submit" value={this.props.formType} />

          </form>
        </div>

        <span>Dont have an account? {this.props.otherForm}</span>
      </div>
    );
  }
}

export default withRouter(SessionForm);
