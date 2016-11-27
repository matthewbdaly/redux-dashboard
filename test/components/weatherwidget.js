import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {List, Map} from 'immutable';
import WeatherWidget from '../../js/components/weatherwidget';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = TestUtils;

describe('Weather Widget', () => {
  it('renders the weather widget', () => {
    const temp = 23;
    const text = 'Sunny';
    const component = renderIntoDocument(
      <WeatherWidget temp={temp} text={text} />
    );
    const weather = findDOMNode(component.refs.weather);
    expect(weather).to.be.ok;
    expect(weather.textContent).to.contain('Sunny');
    expect(weather.textContent).to.contain('23');
  });
});
