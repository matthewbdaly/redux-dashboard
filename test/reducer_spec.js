import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../js/reducer';

describe('Reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        shout: 'Hello there',
        time: 1465161913289,
        text: 'Sunny',
        teabags: 5,
        temp: 23
      })
    };
    const nextState = reducer(initialState, action);
    
    expect(nextState).to.equal(fromJS({
      shout: 'Hello there',
      time: 1465161913289,
      text: 'Sunny',
      teabags: 5,
      temp: 23
    }));
  });

  it('handles SET_TIME', () => {
    const initialState = Map();
    const action = {
      type: 'SET_TIME',
      state: Map({
        time: 1465161913289
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      time: 1465161913289
    }));
  });

  it('handles SET_WEATHER', () => {
    const initialState = Map();
    const action = {
      type: 'SET_WEATHER',
      state: Map({
        text: 'Sunny',
        temp: 23
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      text: 'Sunny',
      temp: 23
    }));
  });

  it('handles SET_TEABAGS', () => {
    const initialState = Map();
    const action = {
      type: 'SET_TEABAGS',
      state: Map({
        teabags: 5,
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      teabags: 5
    }));
  });

  it('handles SET_SHOUT', () => {
    const initialState = Map();
    const action = {
      type: 'SET_SHOUT',
      state: Map({
        shout: 'Hello there',
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      shout: 'Hello there'
    }));
  });

  it('handles null action', () => {
    const initialState = Map();
    const action = {
      state: Map({
        time: 1465161913289
      })
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({}));
  });
});
