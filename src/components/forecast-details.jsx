import React from 'react';
import PropTypes from 'prop-types';

const moment = require('moment');

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="forecast-details__date">{moment(props.date).format('ddd Do MMM')}</div>
    {/* <div className="forecast-details__maxtemperature">{props.temperature.max}</div> */}
    {/* <div className="forecast-details__mintemperature">{props.temperature.min}</div> */}
    <div className="forecast-details__humidity">{props.humidity}</div>
    {/* <div className="forecast-details__windspeed">{props.wind.speed} /></div> */}
    {/* <div className="forecast-details__winddirection">{props.wind.direction}</div> */}
  </div>
);

ForecastDetails.propTypes = {
  date: PropTypes.number,
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
};

export default ForecastDetails;
