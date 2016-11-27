import {Map} from 'immutable';

export function updateShoutbox(text) {
  return {
    type: 'SET_SHOUT',
    state: Map({
      shout: text
    })
  };
}

export function setTea(teabags) {
  return {
    type: 'SET_TEABAGS',
    state: Map({
      teabags: teabags
    })
  };
}

export function setState(state) {
  return {
    type: 'SET_STATE',
    state: state
  };
}
