import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {List, Map} from 'immutable';
import ShoutboxWidget from '../../js/components/shoutboxwidget';
import { updateShoutbox } from '../../js/actions';
import chai from 'chai';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = TestUtils;

describe('Shoutbox Widget', () => {
  it('renders the shoutbox widget', () => {
    // Mock updateShoutbox
    const spy = chai.spy(updateShoutbox);

    // Set up component
    const shout = "Hey there!";
    const component = renderIntoDocument(
      <ShoutboxWidget shout={shout} updateShoutbox={spy} />
    );
    const shoutcontent = findDOMNode(component.refs.shout);
    expect(shoutcontent).to.be.ok;
    expect(shoutcontent.textContent).to.contain('Hey there!');

    // Click on component
    Simulate.click(shoutcontent);

    // Change it
    shoutcontent.value = 'Bye!';
    Simulate.input(shoutcontent);
    Simulate.blur(shoutcontent);

    // Check it was called
    expect(spy).to.have.been.called();
  });
});
