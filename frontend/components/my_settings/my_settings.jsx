import React from 'react';
// import Modal from '../../modal/modal';

class MySettings extends React.Component {

  // <p style={{background: 'white'}}>Hello</p>
  constructor(props) {
      super(props);

      this.state = { id: "", name: "", img: "", role: "", depart: "", pronouns: "", about_me: "" };
      this.createState(false);
      this.createState = this.createState.bind(this);
  }

  createState(changeState = true) {
    const user = { id: "", name: "", img: "", role: "", depart: "", pronouns: "", about_me: "" };
    const fullName = this.props.currentUser.first + ' ' + this.props.currentUser.last;
    Object.keys(user).forEach(el => {
      user[el] = el === 'name' ? fullName || "" : this.props.currentUser[el] || "";
    });
    changeState ? this.setState(user) : this.state = user;
  }

  // componentDidMount() {
  //   this.props.fetchUser(this.props.currentUser.id).then( () => 
  //     this.createState(true));
  // }

  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  userIcon(otherClasses="") {
    const user = this.props.currentUser;
    if (user.first === "") { return }
    let initials = <div className={`circle circle-settings ${otherClasses}`} >{`${user.first[0]}${user.last[0]}`}</div>
    if (user.photoUrl) {
      initials = <img className="circle border settings" src={user.photoUrl} />
    }
    return initials;
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      this.props.updateUser(this.state).then(this.props.closeModal);
    }
  }

  render() { 
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit()} className="settings-form">
          <span>My Profile Settings</span>
          <div className="all-settings-inputs">
            <section className="member-initials settings-member-initials">
              {this.userIcon('bigger')}

              <input type="text" value={this.state.name} required id="member-input" className="settings-input"
                onChange={this.update('name')} placeholder="Full name" />
            </section>

            <span className="other-setting-inputs">
              <label className="flex-input"> <p>Role</p>
                  <input type="text" value={this.state.role} className="settings-input"
                      onChange={this.update('role')} />
              </label>

              <label className="flex-input"> <p>Department</p>
              <input type="text" value={this.state.depart} className="settings-input"
                  onChange={this.update('depart')} />
              </label>

              <label className="flex-input"> <p>Pronouns</p>
              <input type="text" value={this.state.pronouns} className="settings-input"
                  onChange={this.update('pronouns')} placeholder="Third-person pronouns (e.g. she/her/hers)" />
              </label>

              <label className="flex-input"> <p>About Me</p>
              <input id="about-me-input" type="textarea" value={this.state.about_me} className="settings-input"
                  onChange={this.update('about')} placeholder="I usually work from 9am-5pm EST. Feel free to assign me a task with a due date anytime. Also, I love dogs!" />
              </label> 
            </span>
          </div>

          <input type="submit" value="Update Profile"/>
        </form>
      </React.Fragment>
    )
  }
}

export default MySettings;