import { connect } from 'react-redux';
import Dashboard from './components/dashboard';
import { updateShoutbox, setTea } from './actions';

export const DashboardContainer = connect(
  function mapStateToProps(state) {
    return {
      title: state.get('title'),
      time: state.get('time'),
      text: state.get('text'),
      temp: state.get('temp'),
      shout: state.get('shout'),
      teabags: state.get('teabags')
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      updateShoutbox: text => dispatch(updateShoutbox(text)),
      setTea: teabags => dispatch(setTea(teabags))
    };
  }
)(Dashboard);
