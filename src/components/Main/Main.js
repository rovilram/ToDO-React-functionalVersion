import './Main.css';
import React from 'react';
import Task from '../Task/Task';
import Search from '../Search/Search';
import Form from '../Form/Form';
import { getTasks, setTasks } from '../../dataProvider/dataProvider';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      action: '',
      filter: '',
      tasks: [
        /* {
          id: 0,
          title: 'probando',
          done: true,
          priority: 'alta',
        },
        {
          id: 1,
          title: 'probando 1',
          done: false,
          priority: 'baja',
        },
        {
          id: 2,
          title: 'probando 2',
          done: false,
          priority: 'baja',
        },
        {
          id: 3,
          title: 'probando 3',
          done: false,
          priority: 'baja',
        },
        {
          id: 4,
          title: 'probando 4',
          done: false,
          priority: 'baja',
        }, */
      ],
      edit: '',
    };
  }

  componentDidMount() {
    let tasks = getTasks();
    console.log('MONTAJE', tasks);
    tasks = tasks ? tasks : '[]';
    this.setState({
      tasks: [...this.state.tasks, ...tasks],
    });
  }

  componentDidUpdate() {
    setTasks(this.state.tasks);
    console.log("ACTUALIZANDO", getTasks())
  }

  searchTask = (searchText) => {
    this.setState({ filter: searchText });
  };

  setDoneTask = (index) => {
    const newState = this.state.tasks.map((task) => {
      task.done = task.id === index ? !task.done : task.done;
      return task;
    });
    this.setState({ tasks: newState });
  };

  addTask = (task) => {
    task = {
      title: task.title,
      id: Date.now(),
      done: false,
      priority: 'baja',
    };

    this.setState({ tasks: [...this.state.tasks, task], action: '' });
    setTasks(this.state.tasks);
  };

  editTaskBtn = (index) => {
    this.setState({ edit: index, action: 'edit' });
  };

  actionAdd = () => {
    this.setState({ action: 'add' });
  };

  actionEdit = () => {
    this.setState({ action: 'edit' });
  };

  clearAction = () => {
    this.setState({ action: '' });
  };

  editTask = (task) => {
    const newTasks = this.state.tasks.map((el) => {
      return task.id === el.id ? task : el;
    });

    this.setState({ tasks: newTasks, edit: '', action: '' });
    setTasks(this.state.tasks);
  };

  delTask = (index) => {
    const newState = this.state.tasks.filter((task) => task.id !== index);
    this.setState({ tasks: newState });
  };

  changePriority = (priority, id) => {
    const newTasks = this.state.tasks.map((el) => {
      if (priority === 'alta') {
        el.priority = el.id === id ? priority : 'baja';
      } else {
        el.priority = el.id === id ? priority : el.priority;
      }
      return el;
    });
    this.setState({ tasks: newTasks });
  };

  drawTasks = (tasks) => {
    let tasksArray = [];
    if (tasks.length !== 0) {
      tasksArray = tasks
        .filter((task) =>
          task.title.toLowerCase().includes(this.state.filter.toLowerCase()),
        )
        .map((task) => (
          <Task
            delTask={this.delTask}
            editTaskBtn={this.editTaskBtn}
            key={task.id}
            tarea={{
              title: task.title,
              id: task.id,
              done: task.done,
              priority: task.priority,
            }}
            setDoneTask={this.setDoneTask}
            changePriority={this.changePriority}
          />
        ));
      return tasksArray;
    } else return <div className="errorNoTasks">NO HAY TAREAS</div>;
  };

  render() {
    return (
      <main>
        <div className="wrapper">
          {this.state.action === '' ? (
            <Search searchTask={this.searchTask} />
          ) : (
            ''
          )}
          {this.state.action === 'add' ? (
            <Form
              /*               task={{
                id: Date.now(),
                title: '',
                done: false,
                priority: 'baja',
              }} */
              formSubmit={this.addTask}
              clearAction={this.clearAction}
              text="Añadir Tarea"
            />
          ) : (
            ''
          )}
          {this.state.action === 'edit' ? (
            <Form
              formSubmit={this.editTask}
              clearAction={this.clearAction}
              task={
                this.state.tasks.filter(
                  (task) => task.id === this.state.edit,
                )[0]
              }
              text="Editar Tarea"
            />
          ) : (
            ''
          )}
          {this.state.action === '' ? (
            <div className="addBtnWrapper">
              <button onClick={this.actionAdd}>Añadir</button>
            </div>
          ) : (
            ''
          )}
          <div className="taskWrapper">
            {this.state.action === '' ? (
              <ul className="tasks">{this.drawTasks(this.state.tasks)}</ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
