import './Form.css';
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  componentDidMount() {
    this.setState({
      title: this.props.task ? this.props.task.title : '',
      id: this.props.task ? this.props.task.id : '',
      done: this.props.task ? this.props.task.done : '',
      priority: this.props.task ? this.props.task.priority : '',
    });
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmit(this.state);
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  render() {
    return (
      <div className="formWrapper">
        <form onSubmit={(e) => this.formSubmit(e)}>
          <input
            className="taskText"
            type="text"
            defaultValue={this.state.title}
            onChange={this.handleTitle}
          />
          <input className="okBtn" type="submit" value={this.props.text} />
          <input
            className="koBtn"
            type="button"
            value="Cancelar"
            onClick={this.props.clearAction}
          />
        </form>
      </div>
    );
  }
}

export default Form;
