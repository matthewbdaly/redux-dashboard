import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  incrementTeabags() {
    this.props.setTea(this.props.teabags + 1);
  },
  decrementTeabags() {
    if (this.props.teabags > 0) {
      this.props.setTea(this.props.teabags - 1);
    }
  },
  render() {
    return (
      <div className="teawidget widget">
        <div className="widget-content">
          <h2 ref="tea">{this.props.teabags} teabags left</h2>
          <button ref="increment" onClick={this.incrementTeabags}>Increment</button>
          <button ref="decrement" onClick={this.decrementTeabags}>Decrement</button>
        </div>
      </div>
    );
  }
});
