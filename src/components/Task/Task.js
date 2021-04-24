import './Task.css';
import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.tarea.title,
      id: props.tarea.id,
      done: props.tarea.done,
    };

    this.rot = {
      transform: `rotate(${Math.random() * 5 - 2.5}deg)`,
    };
  }

  checkboxHandler = () => {
    this.props.setDoneTask(this.state.id);
  };

  editClickHandler = () => {
    this.props.editTaskBtn(this.state.id);
  };

  delClickHandler = () => {
    this.props.delTask(this.state.id);
  };

  selectHandler = (e) => {
    this.props.changePriority(e.target.value, this.state.id);
  };

  render() {
    return (
      <li style={this.rot} className={`${this.props.tarea.priority} task`}>
        <input
          type="checkbox"
          checked={this.props.tarea.done}
          onChange={this.checkboxHandler}
        ></input>
        <div className="titleWrapper">
          <p className={this.props.tarea.done ? 'done' : ''}>
            {this.props.tarea.title}
          </p>
        </div>
        <div className="seletWrapper">
          <select
            name="select"
            onChange={this.selectHandler}
            value={this.props.tarea.priority}
          >
            <option value="alta">Alta</option>
            <option value="baja">Baja</option>
          </select>
        </div>
        <div className="buttonWrapper">
          <button onClick={this.editClickHandler}>Editar</button>
          <button onClick={this.delClickHandler}>Eliminar</button>
        </div>
      </li>
    );
  }
}

export default Task;
