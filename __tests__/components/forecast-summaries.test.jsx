import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummaries from '../../src/components/forecast-summaries';
import ForecastSummary from '../../src/components/forecast-summary';

const forecasts = [
  {
    date: 123,
    description: 'date1',
    icon: 'icon1',
    temperature: {
      max: 999,
    },
  },
  {
    date: 456,
    description: 'date2',
    icon: 'icon2',
    temperature: {
      max: 777,
    },
  },
];

it('renders the correct amount of ForecastSummary components', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));

  expect(wrapper.find(ForecastSummary).length).toEqual(2);
});

it('renders the date prop on a ForecastSummary component', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));


  const date = wrapper.find('forecast-summary__date');
  expect(date.prop('date')).toEqual(123);

  // expect(wrapper.prop('date')).toEqual(123);
});
