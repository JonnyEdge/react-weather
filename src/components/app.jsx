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
      date={props.forecasts.date}
      maxtemperature={props.forecasts.maxtemperature}
      mintemperature={props.forecasts.mintemperature}
      humidity={props.forecasts.humidity}
      windspeed={props.forecasts.windspeed}
      winddirection={props.forecasts.winddirection}
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
