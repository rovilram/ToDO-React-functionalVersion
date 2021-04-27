import './Main.css';
import React, { useState, useEffect, useContext } from 'react';
import Task from '../Task/Task';
import Search from '../Search/Search';
import Form from '../Form/Form';
import { getTasks, saveTasks } from '../../dataProvider/dataProvider';
import LoggedConsumer from '../../contexts/LoggedContext';

function Main(props) {
  const logged = useContext(LoggedConsumer);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [action, setAction] = useState('');
  const [edit, setEdit] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  useEffect(() => {
    let newTasks = getTasks();
    newTasks = newTasks ? newTasks : '[]';
    setTasks([...tasks, ...newTasks]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  });

  useEffect(() => {
    setAction(props.action);
  }, [props.action]);

  //Task component methods
  const searchTask = (searchText) => {
    setFilter(searchText);
  };

  const setDoneTask = (index) => {
    const newState = tasks.map((task) => {
      task.done = task.id === index ? !task.done : task.done;
      return task;
    });
    setTasks(newState);
  };

  const editTaskBtn = (index) => {
    setEdit(index);
    setAction('edit');
  };

  const actionAdd = () => {
    setAction('add');
  };

  const delTask = (index) => {
    const newState = tasks.filter((task) => task.id !== index);
    setTasks(newState);
  };

  const changePriority = (priority, id) => {
    const newTasks = tasks.map((el) => {
      if (priority === 'alta') {
        el.priority = el.id === id ? priority : 'baja';
      } else {
        el.priority = el.id === id ? priority : el.priority;
      }
      return el;
    });
    setTasks(newTasks);
  };

  //Form component methods

  const addTask = (task) => {
    task = {
      title: task.title,
      id: Date.now(),
      done: false,
      priority: 'baja',
    };

    setTasks([...tasks, task]);
    setAction('');
    saveTasks(tasks);
  };

  const editTask = (task) => {
    const newTasks = tasks.map((el) => {
      return task.id === el.id ? task : el;
    });

    setTasks(newTasks);
    setEdit('');
    setAction('');
    saveTasks(tasks);
  };

  //render methods

  const drawTasks = (tasks) => {
    let tasksArray = [];
    if (tasks.length !== 0) {
      tasksArray = tasks
        .filter((task) =>
          task.title.toLowerCase().includes(filter.toLowerCase()),
        )
        .map((task) => (
          <Task
            delTask={delTask}
            editTaskBtn={editTaskBtn}
            key={task.id}
            tarea={{
              title: task.title,
              id: task.id,
              done: task.done,
              priority: task.priority,
            }}
            setDoneTask={setDoneTask}
            changePriority={changePriority}
          />
        ));
      return tasksArray;
    } else return <div className="errorNoTasks">NO HAY TAREAS</div>;
  };

  const userHandler = (e) => {
    setUser(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const logBtnHandler = () => {
    if (user === 'admin' && pass === '1234admin') {
      logged.toggleLogged();
    }
    else
    {
      props.clearAction();
    }
  };
  const cancelBtnHandler = () => {};

  return (
    <main>
      <div className="wrapper">
        {(action === 'add' || tasks.length === 0) && logged.logged && (
          <Form
            formSubmit={addTask}
            clearAction={props.clearAction}
            text="Añadir Tarea"
          />
        )}
        {action === 'edit' && (
          <Form
            formSubmit={editTask}
            clearAction={props.clearAction}
            task={tasks.filter((task) => task.id === edit)[0]}
            text="Editar Tarea"
          />
        )}
        {action === '' && tasks.length !== 0 && (
          <>
            <Search searchTask={searchTask} />
            {logged.logged && (
              <div className="addBtnWrapper">
                <button onClick={actionAdd}>Añadir</button>
              </div>
            )}
            <div className="taskWrapper">
              <ul className="tasks">{drawTasks(tasks)}</ul>
            </div>
          </>
        )}
        {action === 'login' && (
          <>
            <h2>LOGIN</h2>
            <div className="loginWrapper">
              <label htmlFor="userInput">Usuario: </label>
              <input type="text" id="userInput" onChange={userHandler} />
              <br />
              <label htmlFor="passInput">Contraseña: </label>
              <input type="text" id="passInput" onChange={passHandler} />
              <button onClick={logBtnHandler}>Enviar</button>
              <button onClick={cancelBtnHandler}>Cancelar</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
