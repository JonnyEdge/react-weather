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
    const enteredText = event.target.value;
    this.setState({ searchText: enteredText });
  }

  render() {
    return (
      <span className="search-form">
        <div className="search-form__input"><input type="text" value={this.state.searchText} onChange={this.handleInputChange} /></div>
        <div className="search-form__submit"><button onClick={this.props.searchLocationChange}>Search</button></div>
      </span>
    );
  }
}

export default SearchForm;
