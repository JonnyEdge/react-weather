import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.scss';
import ForecastDetails from './forecast-details';

const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
    <ForecastDetails
      date={props.forecasts[0].date}
      maxtemperature={props.forecasts[0].temperature.max}
      mintemperature={props.forecasts[0].temperature.min}
      humidity={props.forecasts[0].humidity}
      windspeed={props.forecasts[0].wind.speed}
      winddirection={props.forecasts[0].wind.direction}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};


export default App;
