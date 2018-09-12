import React from 'react';
// import Modal from '../modal/modal';
// import { Link, withRouter } from 'react-router-dom';
import TasksContainer from '../tasks/tasks_container';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class Columns extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: 0, addCol: false, title: "", addTaskId: 0, addTask: false, name: "" };

    this.columns = this.columns.bind(this);
    this.editRemoveColPopup = this.editRemoveColPopup.bind(this);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.clearState = this.clearState.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.showAddColumn = this.showAddColumn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tasks = this.tasks.bind(this);
    this.toggleAddTask = this.toggleAddTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }

  componentDidMount() {
    // if (this.props.project.id) {
      this.props.fetchProject(this.props.projectId);
    // }
  }

  componentDidUpdate(prevProps) {
    if (this.props.project.id !== prevProps.project.id) {
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
      this.setState({id: 0});
    } else {
      this.setState({id: id});
    }
  }

  tasks(task_ids, provided){
    const props = this.props;
    const tasks = this.props.tasks;
    return task_ids.map((task_id, index) => {
      return <TasksContainer key={task_id} props={props} task={tasks[task_id]}
          provided={provided} {...provided.droppableProps} index={index}
      />
    })
  }

  toggleAddTask(e, column_id) {
    e.stopPropagation();
    if (this.state.addTask > 0) {
      this.setState({ addTaskId: 0, addTask: false })
    } else {
      this.setState({ addTaskId: column_id, addTask: true, addCol: false })
    }
  }

  addTask(e, column) {
    e.preventDefault();
    let task_obj;
    if (column.task_ids.length === 0) {
      task_obj = { name: this.state.name, column_id: column.id }
    } else {
      task_obj = { name: this.state.name, column_id: column.id, next_id: column.task_ids[0] }
    }
    this.props.createTask(task_obj)
    .then(this.clearSomeState());
  }


  columns() {
    const cols = this.props.columns.map(column => {
      if (!column.id || !column.task_ids) { return };
      const taskIncluded = (column.task_ids.length === 0) ? 'cols-tasks-no-tasks' : 'cols-task';
      const active = (column.id === this.state.id && column.id !== 0) ? 'active' : 'hidden';
      const adding = (this.state.addTaskId === column.id) ? 'adding' : 'hidden';
      return (
        <Droppable droppableId={column.id.toString()} key={column.id}>
          {provided => (
            <div className="col-wrapper" key={column.id} ref={provided.innerRef}>
              <span className="cols-top">
                <section className="title">
                  <p className="cols-title">{column.title}</p>
                  <div onClick={(e) => this.togglePopup(e, column.id)} className="edit-title"><i></i></div>
                  <div className={active}>{this.editRemoveColPopup()}</div>
                </section>
                <div onClick={(e) => this.toggleAddTask(e, column.id)} className="add-task">+</div>
              </span>
              <section className={taskIncluded}>
                <form onClick={(e) => { e.stopPropagation() }} id={column.id} className={adding} onSubmit={(e) => this.addTask(e, column)}>
                  <input className="add-task-text" type="text" onChange={(e) => this.updateTaskName(e)} value={this.state.name} placeholder="New Task Name" autoFocus></input>
                </form>
                {this.tasks(column.task_ids, provided)}
                {provided.placeholder}
              </section>
            </div>
          )}
        </Droppable>
      );
    });
    return cols;
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  updateTaskName(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createColumn({ title: this.state.title, project_id: this.props.match.params.projectId })
    .then(this.clearState());
  }

  handleKeyPress(e) {
    e.preventDefault
    if (e.key === "Escape") {
      this.clearState();
    }
  }

  showAddColumn(e) {
    e.stopPropagation();
    this.setState({ id: 0, addCol: true, addTaskId: 0, addTask: false })
  }

  addColumn(){
    if (this.state.addCol) {
      return (
        <div className="col-wrapper">
          <span className="cols-top">
            <form onClick={(e) => {e.stopPropagation();}} onSubmit={(e) => this.handleSubmit(e)}>
              <input className="new-column-input" type="text" onChange={(e) => this.updateTitle(e)} value={this.state.title} placeholder="New Column" autoFocus></input>
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
    this.setState({ id: 0, addCol: false, title: "", addTaskId: 0, addTask: false, name: "" });
  }

  clearSomeState() {
    this.setState({ id: 0, addCol: false, title: "", name: "" });
  }

  dragEnd(result) {
    const { destination, source, draggableId, reason } = result;
    if (destination !== null && reason !== 'CANCEL') {
      if (destination.droppableId !== source.droppableId || destination.index !== source.index) {
        console.log(result);
        const currentCol = this.props.allColumns[source.droppableId];
        const futureCol = this.props.allColumns[destination.droppableId];
        const currentTaskId = currentCol.task_ids[source.index];
        // currentCol.task_ids = currentCol.task_ids.slice(0, source.index).concat(currentCol.task_ids.slice(source.index+1));
        futureCol.task_ids = futureCol.task_ids.slice(0, destination.index).concat(currentTaskId).concat(futureCol.task_ids.slice(destination.index));
        const orderInfo = {future_ord: futureCol.task_ids, index: destination.index, future_col: futureCol.id, task_id: currentTaskId, task: this.props.tasks[currentTaskId]}
        this.props.updateTaskOrder(orderInfo);
      }
    }
  }

  render() {
    return (
        <div onClick={(e) => this.clearState()} onKeyDown={(e) => this.handleKeyPress(e)} className="project-page">
          <div className="columns">
            <DragDropContext onDragEnd={this.dragEnd}>
              {this.columns()}
            </DragDropContext>
            {this.addColumn()}
          </div>
        </div>
    )
  }

}

export default Columns;
