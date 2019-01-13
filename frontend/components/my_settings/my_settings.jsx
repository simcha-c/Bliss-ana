import React from 'react';
// import Modal from '../../modal/modal';

class MySettings extends React.Component {

  // <p style={{background: 'white'}}>Hello</p>
  constructor(props) {
      super(props);
      
      this.state = {name: "", img: "", role: "", depart: "", pronouns: "", about_me: ""};
      
      Object.keys(this.state).forEach(el => {
          if (el === 'name') {
              const fullName = props.currentUser.first + ' ' + props.currentUser.last
              this.state[el] = fullName;
          } else {
              this.state[el] = props.currentUser[el] || "";
          }
      });
      this.update = this.update.bind(this);
  }

  update(field) {
  return e => this.setState({
      [field]: e.currentTarget.value
  });
  }

  userIcon() {
    const user = this.props.currentUser;
    if (user.first === "") { return }
    let initials = <div className="circle" >{`${user.first[0]}${user.last[0]}`}</div>
    if (user.photoUrl) {
      initials = <img className="circle border" src={user.photoUrl} />
    }
    return initials;
  }

  render() { 
    return (
      <React.Fragment>
        <span>
            My Profile Settings
        </span>
        <form className="settings-form">
          <section className="member-initials">
            {this.userIcon()}

            <input type="text" value={this.state.name}
              onChange={this.update('name')} placeholder="Full name" />
          </section>

          <label> Role
              <input type="text" value={this.state.role}
                  onChange={this.update('role')} placeholder="Role" />
          </label>

          <label> Department
          <input type="text" value={this.state.depart}
              onChange={this.update('depart')} placeholder="Department" />
          </label>

          <label> Pronouns
          <input type="text" value={this.state.pronouns}
              onChange={this.update('pronouns')} placeholder="Third-person pronouns (e.g. she/her/hers)" />
          </label>

          <label> About Me
          <input type="text" value={this.state.about}
              onChange={this.update('about')} placeholder="I usually work from 9am-5pm EST. Feel free to assign me a task with a due date anytime. Also, I love dogs!" />
          </label> 
        </form>
      </React.Fragment>
    )
  }
}

export default MySettings;