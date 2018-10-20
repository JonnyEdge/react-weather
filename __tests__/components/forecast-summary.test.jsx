import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the passed date in a P tag', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary date="foo" />
  ));

  // const text = wrapper.find('p').text();
  const text = wrapper.find('.forecast-summary__date');

  expect(text).toEqual('foo');
});