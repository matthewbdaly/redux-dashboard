import {List, Map} from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return state.merge(state, action.state).delete('type').delete('state');
  case 'SET_TIME':
    return state.set('time', action.state.get('time'));
  case 'SET_WEATHER':
    return state.set('temp', action.state.get('temp')).set('text', action.state.get('text'));   
  case 'SET_TEABAGS':
    return state.set('teabags', action.state.get('teabags'));
  case 'SET_SHOUT':
    return state.set('shout', action.state.get('shout'));
  }
  return state;
}
