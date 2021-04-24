import './Task.css';
import React, { useState, useEffect } from 'react';

function Task(props) {
  const [task, setTask] = useState({});
  /*   constructor(props) {
    super(props);

    this.state = {
      title: props.tarea.title,
      id: props.tarea.id,
      done: props.tarea.done,
    };

    this.rot = {
      transform: `rotate(${Math.random() * 5 - 2.5}deg)`,
    };
  } */

  useEffect(() => {
    const newTask = {
      title: props.tarea.title,
      id: props.tarea.id,
      done: props.tarea.done,
    };
    setTask(newTask);
  }, [props.tarea.title, props.tarea.id, props.tarea.done]);

  const rotStyle = {
    transform: `rotate(${Math.random() * 5 - 2.5}deg)`,
  };

  const checkboxHandler = () => {
    props.setDoneTask(task.id);
  };

  const editClickHandler = () => {
    props.editTaskBtn(task.id);
  };

  const delClickHandler = () => {
    props.delTask(task.id);
  };

  const selectHandler = (e) => {
    props.changePriority(e.target.value, task.id);
  };

  return (
    <li style={rotStyle} className={`${props.tarea.priority} task`}>
      <input
        type="checkbox"
        checked={props.tarea.done}
        onChange={checkboxHandler}
      ></input>
      <div className="titleWrapper">
        <p className={props.tarea.done ? 'done' : ''}>
          {props.tarea.title}
        </p>
      </div>
      <div className="seletWrapper">
        <select
          name="select"
          onChange={selectHandler}
          value={props.tarea.priority}
        >
          <option value="alta">Alta</option>
          <option value="baja">Baja</option>
        </select>
      </div>
      <div className="buttonWrapper">
        <button onClick={editClickHandler}>Editar</button>
        <button onClick={delClickHandler}>Eliminar</button>
      </div>
    </li>
  );
}

export default Task;
