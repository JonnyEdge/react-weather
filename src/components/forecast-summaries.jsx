import React from 'react';
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.scss';

// Put "console.log(props) ||"" after => and before ( in the constructor function to get a readout of what props contains

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          onSelect={props.onForecastSelect}
          key={forecast.date}
          date={forecast.date}
          temperature={forecast.temperature.max}
          description={forecast.description}
          icon={forecast.icon}
        />
      ))
    }
  </div>
);

export default ForecastSummaries;
