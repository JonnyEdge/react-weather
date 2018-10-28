import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <span className="search-form">
        <div className="search-form__input"><input type="text" value={this.state.searchText} onChange={this.handleInputChange} /></div>
        <div className="search-form__submit"><button onClick>Search</button></div>
      </span>
    );
  }
}

export default SearchForm;
