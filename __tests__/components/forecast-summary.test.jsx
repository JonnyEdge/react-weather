import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the passed date in its own div', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary date="foo" />
  ));

  const text = wrapper.find('.date').text();

  expect(text).toEqual('foo');
});

it('renders the passed temperature in its own div', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary temperature="20" />
  ));

  const text = wrapper.find('.temperature').text();

  expect(text).toEqual('20');
});

it('renders the passed description in its own div', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary description="bar" />
  ));

  const text = wrapper.find('.description').text();

  expect(text).toEqual('bar');
});

it('renders the passed icon in its own div', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary date="foobar" />
  ));

  const text = wrapper.find('.icon').text();

  expect(text).toEqual('foobar');
});
