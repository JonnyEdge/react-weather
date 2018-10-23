import React from 'react';
import PropTypes from 'prop-types';

const moment = require('moment');

const ForecastDetails = props => (

  <div className="forecast-details">
    <div className="forecast-details__date">{moment(props.forecast.date).format('ddd Do MMM')}</div>
    <div className="forecast-details__maxtemperature">{props.forecast.temperature.max}</div>
    <div className="forecast-details__mintemperature">{props.forecast.temperature.min}</div>
    <div className="forecast-details__humidity">{props.forecast.humidity}</div>
    <div className="forecast-details__windspeed">{props.forecast.wind.speed}</div>
    <div className="forecast-details__winddirection">{props.forecast.wind.direction}</div>
  </div>
);

ForecastDetails.propTypes = {
  date: PropTypes.number,
  maxtemperature: PropTypes.number,
  mintemperature: PropTypes.number,
  humidity: PropTypes.number,
  windspeed: PropTypes.number,
  winddirection: PropTypes.string,
};

export default ForecastDetails;
