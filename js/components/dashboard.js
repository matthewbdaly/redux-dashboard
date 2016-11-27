import React from 'react';
import ClockWidget from './clockwidget';
import WeatherWidget from './weatherwidget';
import ShoutboxWidget from './shoutboxwidget';
import TeaWidget from './teawidget';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="dashboard">
        <h1 ref="title">{this.props.title}</h1>
        <div className="wrapper">
          <ClockWidget {...this.props} />
          <WeatherWidget {...this.props} />
          <ShoutboxWidget {...this.props} />
          <TeaWidget {...this.props} />
        </div>
      </div>
    );
  }
});
