import React from 'react';
import { openModal } from '../../actions/modal_actions';
import Modal from '../modal/modal';
import NavbarContainer from '../navbar/login_nav/navbar_container';

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
        <NavbarContainer />
        <div className="home">
          <span className="home-bold" >
            Move work forward
          </span>
          <span className="home-copy" >
            Blissana is the easiest way for teams to track their work—and get results.
          </span>

            <form className="home-form" onSubmit={() => dispatch(openModal('Sign Up', this.state))}>
              <input type="text" value={this.state.email} placeholder="name@company.com"
                onChange={this.update('email')} className="login-input" >
              </input>

              <input type="submit" className="session-submit-home" value="Get Started" />
            </form>
          <Modal />

        </div>

        <div className="wave"></div>

      </div>
    );
  }

}


export default Homepage;
