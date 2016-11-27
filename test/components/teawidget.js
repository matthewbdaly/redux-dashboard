import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {List, Map} from 'immutable';
import TeaWidget from '../../js/components/teawidget';
import { setTea } from '../../js/actions';
import {expect} from 'chai';
import chai from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = TestUtils;

describe('Tea Widget', () => {
  it('renders the tea widget', () => {
    const setTeaSpy = chai.spy(setTea);
    const teabags = 5;
    const component = renderIntoDocument(
      <TeaWidget teabags={teabags} setTea={setTeaSpy} />
    );
    const tea = findDOMNode(component.refs.tea);
    expect(tea).to.be.ok;
    expect(tea.textContent).to.contain('5');

    // Decrement the count
    const dec = findDOMNode(component.refs.decrement);
    Simulate.click(dec);
    expect(setTeaSpy).to.have.been.called();

    // Increment the count
    const inc = findDOMNode(component.refs.increment);
    Simulate.click(inc);
    expect(setTeaSpy).to.have.been.called();
  });

  it('does not decrement below zero', () => {
    const setTeaSpy = chai.spy(setTea);
    const teabags = 0;
    const component = renderIntoDocument(
      <TeaWidget teabags={teabags} setTea={setTeaSpy} />
    );
    const tea = findDOMNode(component.refs.tea);
    expect(tea).to.be.ok;
    expect(tea.textContent).to.contain('0');

    // Decrement the count
    const dec = findDOMNode(component.refs.decrement);
    Simulate.click(dec);
    expect(setTeaSpy).not.to.have.been.called();
    expect(tea.textContent).to.contain('0');
  });
});
