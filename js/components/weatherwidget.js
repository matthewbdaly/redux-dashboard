import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="weatherwidget widget">
        <div className="widget-content">
          <div ref="weather">
            <h2>{this.props.text}</h2>
            <h4>{this.props.temp} degrees</h4>
          </div>
        </div>
      </div>
    );
  }
});
