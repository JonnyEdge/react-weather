import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.scss';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
      selectedDate: 0,
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.searchLocationChange = this.searchLocationChange.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  componentDidMount() {
    Axios.get('https://mcr-codes-weather.herokuapp.com/forecast')
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: {
            city: response.data.location.city,
            country: response.data.location.country,
          },
        });
      });
  }

  searchLocationChange() {
    Axios.get('https://mcr-codes-weather.herokuapp.com/forecast', {
      params: {
        city: this.state.searchText,
      },
    })
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: {
            city: response.data.location.city,
            country: response.data.location.country,
          },
        });
      });
  }

  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          searchLocationChange={this.searchLocationChange}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;
