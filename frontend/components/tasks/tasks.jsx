import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
// import Modal from '../modal/modal';
// import { Link, withRouter } from 'react-router-dom';

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ cal: false, delete: 'hidden' });

    this.date = this.date.bind(this);
    this.assignee = this.assignee.bind(this);
    this.parseDate = this.parseDate.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.showCalInput = this.showCalInput.bind(this);
  }

  componentDidMount(){
    // this.props.props.fetchProject(this.props.props.projectId);
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
      case (time < 0):
        return (<p className="task-late">{dueDate.toLocaleDateString("en-US", { month: 'long', day: 'numeric' })}</p>)
      case (time > 0 && time < 1 ):
        return (<p className="task-soon">Today</p>)
      case (time > 1 && time < 2):
        return (<p className="task-soon">Tommorow</p>)
      case (time < 7):
        return dueDate.toLocaleDateString("en-US", { weekday: 'long' })
      default:
        return dueDate.toLocaleDateString("en-US", { month: 'long', day: 'numeric' })
    }
  }

  showCalInput() {
    if (this.state.delete === '') {
      this.setState({delete: 'hidden'})
    } else {
      if (this.state.cal) {
        this.setState({cal: false});
      } else {
        this.setState({cal: true});
      }
    }
  }

  handleDateInput(e) {
    e.preventDefault();
    this.props.updateTask({id: this.props.task.id, due_date: e.target.value})
    .then(this.setState({ cal: false }));
    this.props.props.fetchProject(this.props.props.projectId);
  }

  date() {
    const cal = (this.state.cal) ? '' : 'hidden';
    const icon = (this.state.cal) ? 'icon-hidden' : '';
    if (this.props.task.due_date) {
      return (
        <div>
          <div onClick={() => this.showCalInput()} className={`task-due-date ${icon}`}>{this.parseDate(this.props.task.due_date)}</div>
          <form onClick={(e) => {e.stopPropagation()}} className={`${cal} cal-form`} onChange={(e) => this.handleDateInput(e)}>
            <input className="cal-input" type="date" />
          </form>
        </div>
      )
    } else {
      return (
        <div className="calendar">
          <div onClick={() => this.showCalInput()} className={`icon-stroke ${icon}`}>
            <p className="task-icon"><i className="far fa-calendar"></i></p>
          </div>
          <form onClick={(e) => {e.stopPropagation()}} className={`${cal} cal-form`} onChange={(e) => this.handleDateInput(e)}>
            <input className="cal-input" type="date" />
          </form>
        </div>
      )
    }
  }

  assignee() {
    if (this.props.assignee.id) {
      return (
        <div className="assignee-icon circle">{this.props.initials}</div>
      )
    } else {
      const ifComplete = (this.props.task.due_date) ? 'hover-state' : '';

      return (
        <div className={`icon-stroke`} id={ifComplete}>
          <p className={`task-icon`} id={ifComplete}><i className="far fa-user"></i></p>
        </div>
      )
    }
  }

  deleteTask(e) {
    e.stopPropagation();
    this.props.deleteTask(this.props.task.id);
  }

  RemoveTaskPopup(e){
    return (
      <div className="edit-remove-task">
        <button className="remove-project" onClick={(e) => this.deleteTask(e)}>Delete Task</button>
      </div>
    )
  }

  togglePopup(e) {
    e.stopPropagation();
    if (this.state.delete === '') {
      this.setState({delete: 'hidden', cal: false})
    } else {
      this.setState({delete: '', cal: false})
    }
  }

  render() {
    const completed = (this.props.task.completer_id) ? '' : 'hidden';
    const arrowState = (this.state.delete === '') ? 'hidden' : '';
    return (
      <div key={this.props.task.id} className="task-card" onClick={() => this.showCalInput()}>
        <section className="title-info">
          <div className="complete-and-name">
            <div className={`completed-icon ${completed}`}><i className="fas fa-check-circle"></i></div>
            <p className="task-name">{this.props.task.name}</p>
          </div>
          <div className={this.state.delete}>{this.RemoveTaskPopup()}</div>
          <div onClick={(e) => this.togglePopup(e)} className={`down-arrow edit-title`}><i></i></div>
        </section>
        <section className="task-info">
          {this.assignee()}
          {this.date()}
        </section>
      </div>
    )
  }

}



export default Task;
