import React from 'react';
// import Modal from '../../modal/modal';

class MySettings extends React.Component {

  constructor(props) {
      super(props);

      this.state = { id: "", name: "", img: "", role: "", department: "", pronouns: "", about_me: "" };
      this.createState(false);
      this.createState = this.createState.bind(this);
  }

  createState(changeState = true) {
    const user = { name: "", img: "", role: "", department: "", pronouns: "", about_me: "" };
    const fullName = this.props.currentUser.first + ' ' + this.props.currentUser.last;
    Object.keys(user).forEach(el => {
      if (el === 'name') {
        user[el] = fullName || "";
      } else {
        user[el] = this.props.currentUser[el] || this.props.teamMembershipInfo[el] || "";
      }
    });
    user["id"] = this.props.teamMembershipInfo.id;
    changeState ? this.setState(user) : this.state = user;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id).then( () => 
      this.createState(true));
  }

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
      this.props.updateMembership(this.state).then(this.props.closeModal);
    }
  }

  closeModal() {
    return (e) => {
      e.stopPropagation();
      this.props.closeModal();
    }
  }

  render() { 
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit()} className="settings-form">
          <section className="settings-header">
            <div className="settings-profile-header">
              <h1>My Profile Settings</h1>
              <span onClick={this.closeModal()}>×</span>
            </div>
            <p>Profile</p>
          </section>
          <div className="all-settings-inputs">
            <section className="member-initials settings-member-initials">
              {this.userIcon('bigger')}

              <p id="member-input">{this.state.name}</p>
            </section>

            <span className="other-setting-inputs">
              <label className="flex-input"> <p>Role</p>
                <input type="text" value={this.state.role} className="settings-input"
                  onChange={this.update('role')} />
              </label>

              <label className="flex-input"> <p>Department</p>
                <input type="text" value={this.state.department} className="settings-input"
                  onChange={this.update('department')} />
              </label>

              <label className="flex-input"> <p>Pronouns</p>
              <input type="text" value={this.state.pronouns} className="settings-input"
                  onChange={this.update('pronouns')} placeholder="Third-person pronouns (e.g. she/her/hers)" />
              </label>

              <label className="flex-input"> <p>About Me</p>
              <textarea id="about-me-input" value={this.state.about_me} className="settings-input"
                  onChange={this.update('about_me')} placeholder="I usually work from 9am-5pm EST. Feel free to assign me a task with a due date anytime. Also, I love dogs!" />
              </label> 
            </span>
          </div>

          <input type="submit" className="settings-submit" value="Update Profile"/>
        </form>
      </React.Fragment>
    )
  }
}

export default MySettings;