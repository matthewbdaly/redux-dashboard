import React from 'react';
import moment from 'moment';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    const time = moment(this.props.time).format('dddd, Do MMMM YYYY, h:mm:ss a');
    return (
      <div className="clockwidget widget">
        <div className="widget-content">
          <h2 ref="time">{time}</h2>
        </div>
      </div>
    );
  }
});
