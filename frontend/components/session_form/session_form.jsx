import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  loginDemo(){
    this.setState({email: 'demo@bliss-ana.com', password: 'demo-password', first: 'Demo', last: 'Guest'});
    setTimeout(() => this.props.loginDemo(this.state).then(this.props.closeModal), 100);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal, this.renderErrors);
  }

  renderErrors() {
    const errors = Object.values(this.props.errors);
    const allErrors = errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      )
      ;});
      return(
        <ul>
          {allErrors}
        </ul>
      );
    }

    render() {
      let firstName, lastName;
      if (this.props.formType === 'Sign Up') {
        firstName = (
          <label>
            <p> First Name </p>
            <input type="text" value={this.state.first} placeholder="First Name"
              onChange={this.update('first')} className="login-input" />
          </label>
        );
        lastName = (
          <label>
            <p>Last Name</p>
            <input type="text" value={this.state.last} placeholder="First Name"
              onChange={this.update('last')} className="login-input" />
          </label>
        );
      }
      return (
        <div className="login-form-container">
          <div className="x-title">
            <p id="modal-header"> {this.props.formType} </p>
            <div onClick={this.props.closeModal} className="close-x">×</div>
          </div>

          {this.renderErrors()}

          <div className="login-form">
            <form onSubmit={this.handleSubmit} className="login-form-box">

              {firstName}
              {lastName}

              <label>
                <p> Email Address </p>
                <input type="text" value={this.state.email} placeholder="name@company.com"
                  onChange={this.update('email')} className="login-input" />
              </label>

              <label>
                <p>Password</p>
                <input type="password" value={this.state.password} placeholder="Password"
                  onChange={this.update('password')} className="login-input" />
              </label>

              <input className="session-submit" type="submit" value={this.props.formType} />
            </form>

            <button id="demo" onClick={this.loginDemo}>
              Demo Log In
            </button>
            <p> {this.props.otherFormText} {this.props.otherForm} </p>
          </div>

        </div>
      );
    }
  }

  export default withRouter(SessionForm);