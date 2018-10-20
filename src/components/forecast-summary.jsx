import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (

  <span>
    <div className="date">{props.date}</div> 
    <div className="temperature">{props.temperature}</div>
    <div className="description">{props.description}</div>
    <div className="icon">{props.icon}</div>
  </span>
);

ForecastSummary.propTypes = {
  date: PropTypes.number,
  temperature: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
};

export default ForecastSummary;
