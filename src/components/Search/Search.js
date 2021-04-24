import './Search.css';
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleSearch = (e) => {
    this.props.searchTask(e.target.value);
  };

  render() {
    return (
      <div className="searchWrapper">
        <form onSubmit={(e) => this.formSubmit(e)}>
          <input
            placeholder="buscar tarea"
            className="search"
            type="text"
            onChange={this.handleSearch}
          />
        </form>
      </div>
    );
  }
}

export default Search;
