import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class EditShowTask extends React.Component {
  constructor(props) {
    super(props);

    let taskForm = { name: "",  assignee_id: "", completed_date: "",
      completer_id: "", description: "", due_date: "", updated_at: "" };
    this.state = merge(taskForm, props.task);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseDate = this.parseDate.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    this.props.updateTask(this.state);
  }

  parseDate(date) {
    let dueDate = new Date(date);
    let temp = new Date();
    const temp1 = temp.toLocaleDateString();
    const today = new Date(temp1);
    let milli = dueDate - today;
    milli = milli + 40000000;
    const time = milli / (60 * 60 * 24 * 1000);

    switch (true) {
      case (time > 0 && time < 1 ):
        return ('Today');
      case (time < 0 && time > -2):
        return ('Yesterday');
      case (time < 7):
        return dueDate.toLocaleDateString("en-US", { weekday: 'long' });
      default:
        return dueDate.toLocaleDateString("en-US", { month: 'long', day: 'numeric' });
    }
  }

  toggleComplete(e) {
    e.preventDefault();
    if (this.props.task.completed_date) {
      this.setState({
        completer_id: "", completed_date: ""
      }, (e) => this.handleSubmit(e));
    } else {
      const dateNow = new Date();
      this.setState({
        completer_id:  this.props.currentUser, completed_date: dateNow
      }, (e) => this.handleSubmit(e));
    }
  }

  // <form onSubmit={this.handleSubmit}>
  //   <label>
  //     <input type="date" value={this.state.date} placeholder=""
  //       onChange={this.update('date')} className="task-input" />
  //   </label>
  // </form>

    render() {
      const icon = (!this.state.due_date) ? 'icon' : 'icon-hidden';
      const creator = this.props.users[this.state.creator_id];
      const creator_name = `${creator.first} ${creator.last}`;
      const created_at = this.parseDate(this.state.created_at);
      const completeClass = this.state.completed_date ? 'completed' : 'mark-complete';
      const completeText = this.state.completed_date ? 'Completed' : 'Mark Complete';

      return (
        <div className="form-container-task modal-child">
          <div className="x-title-task">
            <button onClick={this.toggleComplete} className={completeClass}>
              <i className="fas fa-check"></i>{completeText}
            </button>
            <div onClick={this.props.closeModal} className="close-x-task">×</div>
          </div>

          <div className="task-form">

            <div className="top-task">
              <form onBlur={this.handleSubmit}>
                <input required type="text" value={this.state.name} placeholder=""
                  onChange={this.update('name')} className="task-name-input" />
              </form>
              <div className="date-task">
                <div onClick={(e) => this.showCalInput(e)} className={`icon-stroke-task ${icon}`}>
                  <p className="task-show-icon"><i className="far fa-calendar"></i></p>
                </div>
                <p className="task-date-text">Due Date</p>
              </div>
            </div>

            <div className="description-task">
              <p className="description-icon"><i className="fas fa-align-left"></i></p>

              <form onBlur={this.handleSubmit} className="task-description-form">
                <textarea onChange={this.update('description')} className="task-description"
                  placeholder="Description" value={this.state.description}>
                </textarea>
              </form>
            </div>

          </div>

          <div className="created-info">
            <p className="creator-info"><strong>{creator_name}</strong> created task.</p>
            <p className="created-date">{created_at}</p>
          </div>


        </div>
      )
    }
  }

  export default withRouter(EditShowTask);
