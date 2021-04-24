import './Form.css';
import React, { useState, useEffect } from 'react';

function Form(props) {
  const [task, setTask] = useState('');

  /*   componentDidMount() {
    this.setState({
      title: this.props.task ? this.props.task.title : '',
      id: this.props.task ? this.props.task.id : '',
      done: this.props.task ? this.props.task.done : '',
      priority: this.props.task ? this.props.task.priority : '',
    }); */

  useEffect(() => {
    const task = {
      title: props.task ? props.task.title : '',
      id: props.task ? props.task.id : '',
      done: props.task ? props.task.done : '',
      priority: props.task ? props.task.priority : '',
    };
    setTask(task);
  }, [props.task]);

  const formSubmit = (e) => {
    e.preventDefault();
    props.formSubmit(task);
  };

  const handleTitle = (e) => {
    setTask({...task, title: e.target.value });
  };

  return (
    <div className="formWrapper">
      <form onSubmit={(e) => formSubmit(e)}>
        <input
          className="taskText"
          type="text"
          defaultValue={task.title}
          onChange={handleTitle}
        />
        <input className="okBtn" type="submit" value={props.text} />
        <input
          className="koBtn"
          type="button"
          value="Cancelar"
          onClick={props.clearAction}
        />
      </form>
    </div>
  );
}

export default Form;
