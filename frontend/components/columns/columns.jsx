import React from 'react';
// import Modal from '../modal/modal';
// import { Link, withRouter } from 'react-router-dom';

class Columns extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: 0 };

    this.columns = this.columns.bind(this);
    this.editRemoveColPopup = this.editRemoveColPopup.bind(this);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    // if (this.props.project.id) {
      this.props.fetchProject(this.props.project.id);
    // }
  }

  componentWillUpdate(nextProps) {
    if (this.props.project.column_ids[0] !== nextProps.project.column_ids[0]) {
      debugger
      this.props.fetchProject(this.props.project.id);
    }
  }

  deleteColumn(e) {
    e.stopPropagation();
    this.props.deleteColumn(parseInt(this.state.id));
    this.setState({id: 0});
  }

  editRemoveColPopup(){
    return (
      <div className="edit-remove-col">
        <button className="remove-project" onClick={(e) => this.deleteColumn(e)}>Delete Column</button>
      </div>
    )
  }

  togglePopup(id) {
    if (this.state.id > 1) {
      this.setState({id: 0})
    } else {
      this.setState({id: id})
    }
  }

  columns() {
    const cols = this.props.columns.map(column => {
      const active = (column.id === this.state.id && column.id !== 0) ? 'active' : 'hidden';
      return (
        <div className="col-wrapper" key={column.id}>
          <span className="cols-top">
            <section className="title">
              <p className="cols-title">{column.title}</p>
              <div onClick={() => this.togglePopup(column.id)} className="edit-title"><i></i></div>
              <div className={active}>{this.editRemoveColPopup()}</div>
            </section>
            <div className="add-task">+</div>
          </span>
          <h2 className="cols-tasks">tasks</h2>
        </div>
      );
    });
    return cols;
  }

  render() {
    return (
      <div className="columns">
        {this.columns()}
      </div>
    )
  }

}

export default Columns;
