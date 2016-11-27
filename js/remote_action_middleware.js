export default socket => store => next => action => {
  let newstate = next(action);
  if (action.type && action.state && action.type !== 'SET_STATE') {
    let state = store.getState();
    let response = state.toJS();
    socket.emit('action', response);
  }
  return newstate;
};
