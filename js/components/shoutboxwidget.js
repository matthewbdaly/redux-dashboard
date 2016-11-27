import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getFocus() {
    this.refs.shout.focus();
  },
  saveChange() {
    this.props.updateShoutbox(this.refs.shout.innerText);
  },
  render() {
    return (
      <div className="shoutboxwidget widget">
        <div className="widget-content">
          <h2 ref="shout" contentEditable="true" onClick={this.getFocus} onInput={this.saveChange} onBlur={this.saveChange} dangerouslySetInnerHTML={{__html: this.props.shout}}></h2>
        </div>
      </div>
    );
  }
});
