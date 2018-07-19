import React from 'react';
// import Modal from '../modal/modal';
// import { Link, withRouter } from 'react-router-dom';

class Columns extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: 0, add: false, title: "" };

    this.columns = this.columns.bind(this);
    this.editRemoveColPopup = this.editRemoveColPopup.bind(this);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.clearState = this.clearState.bind(this);
    this.update = this.update.bind(this);
    this.showAddColumn = this.showAddColumn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // if (this.props.project.id) {
      this.props.fetchProject(this.props.projectId);
    // }
  }

  componentWillUpdate(nextProps) {
    if (this.props.columns[0].id !== nextProps.columns[0].id) {
      this.props.fetchProject(this.props.projectId);
    }
  }

  deleteColumn(e) {
    e.stopPropagation();
    this.props.deleteColumn(parseInt(this.state.id));
    this.setState({ id: 0 });
  }

  editRemoveColPopup(){
    return (
      <div className="edit-remove-col">
        <button className="remove-project" onClick={(e) => this.deleteColumn(e)}>Delete Column</button>
      </div>
    )
  }

  togglePopup(e, id) {
    e.stopPropagation();
    if (this.state.id > 1) {
      this.setState({id: 0})
    } else {
      this.setState({id: id})
    }
  }

  columns() {
    const cols = this.props.columns.map(column => {
      if (!column.id) { return };
      const active = (column.id === this.state.id && column.id !== 0) ? 'active' : 'hidden';
      return (
        <div className="col-wrapper" key={column.id}>
          <span className="cols-top">
            <section className="title">
              <p className="cols-title">{column.title}</p>
              <div onClick={(e) => this.togglePopup(e, column.id)} className="edit-title"><i></i></div>
              <div className={active}>{this.editRemoveColPopup()}</div>
            </section>
            <div className="add-task">+</div>
          </span>
          <h2 className="cols-tasks"></h2>
        </div>
      );
    });
    return cols;
  }

  update(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createColumn({ title: this.state.title, project_id: this.props.match.params.projectId })
    .then(this.clearState());
  }

  showAddColumn(e) {
    e.stopPropagation();
    this.setState({ id: 0, add: true })
  }

  addColumn(){
    if (this.state.add) {
      return (
        <div className="col-wrapper">
          <span className="cols-top">
            <form onClick={(e) => {e.stopPropagation();}} onSubmit={(e) => this.handleSubmit(e)}>
              <input className="new-column-input" onChange={(e) => this.update(e)} type="text" placeholder="New Column" autoFocus />
            </form>
          </span>
        </div>
      )
    } else {
      return (
        <div className="add-column">
          <span onClick={(e) => this.showAddColumn(e)} className="add-column-top">
            <p className="add-column-title cols-title">+ Add column</p>
          </span>
        </div>
      )
    }
  }

  clearState(e) {
    event.stopPropagation();
    this.setState({ id: 0, add: false, title: "" });
  }

  render() {
    return (
      <div onClick={(e) => this.clearState()} className="project-page">
        <div className="columns">
          {this.columns()}
          {this.addColumn()}
        </div>
      </div>
    )
  }

}

export default Columns;
