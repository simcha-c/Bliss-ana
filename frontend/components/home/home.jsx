import React from 'react';
import { openModal } from '../../actions/modal_actions';
import Modal from '../modal/modal';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: ''
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div  >
        <div className="home">
          <span className="home-bold" >
            Move work forward
          </span>
          <span className="home-copy" >
            Asana is the easiest way for teams to track their work—and get results.
          </span>

            <form className="home-form">
              <input type="text" value={this.state.email} placeholder="name@company.com"
                onChange={this.update('email')} className="login-input" >
              </input>

              <button className="session-submit" onClick={() => dispatch(openModal('Sign Up', this.state))}>Get Started</button>
            </form>
          <Modal />

        </div>

        <div className="wave"></div>

      </div>
    );
  }

}


export default Homepage;
