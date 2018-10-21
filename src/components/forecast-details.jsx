import React from 'react';
import PropTypes from 'prop-types';

const moment = require('moment');

const ForecastDetails = props => (
  
  <div className="forecast-details">
    <div className="forecast-details__date">{moment(props.date).format('ddd Do MMM')}</div>
    <div className="forecast-details__maxtemperature">{props.maxtemperature}</div>
    <div className="forecast-details__mintemperature">{props.mintemperature}</div>
    <div className="forecast-details__humidity">{props.humidity}</div>
    <div className="forecast-details__windspeed">{props.windspeed}</div>
    <div className="forecast-details__winddirection">{props.winddirection}</div>
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
