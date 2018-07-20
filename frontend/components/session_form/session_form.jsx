import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    const formInputs = {
      first: '',
      last: '',
      email: '',
      password: ''
    };
    this.state = merge(formInputs, props.form);
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
    setTimeout(() => this.props.loginDemo(this.state).then(this.props.closeModal), 500);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
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
      let firstName, lastName;
      if (this.props.formType === 'Sign Up') {
        firstName = (
          <label>
            <p> First Name </p>
            <input required type="text" value={this.state.first} placeholder="First Name"
              onChange={this.update('first')} className="login-input" />
          </label>
        );
        lastName = (
          <label>
            <p>Last Name</p>
            <input required type="text" value={this.state.last} placeholder="First Name"
              onChange={this.update('last')} className="login-input" />
          </label>
        );
      }
      return (
        <div className="form-container">
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
                <input required type="email" value={this.state.email} placeholder="name@company.com"
                  onChange={this.update('email')} className="login-input" />
              </label>

              <label>
                <p>Password</p>
                <input required minLength="6" type="password" value={this.state.password} placeholder="Password"
                  onChange={this.update('password')} className="login-input" />
              </label>

              <input className="session-submit" type="submit" value={this.props.formType} />
            </form>

            <button id="demo" onClick={this.loginDemo}>
              Demo Log In
            </button>
            <span> {this.props.otherFormText} {this.props.otherForm} </span>
          </div>

        </div>
      );
    }
  }

  export default withRouter(SessionForm);
