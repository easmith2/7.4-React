var React = require('react');
var Palette = require('./Palette.react');

var Palettes = React.createClass({
  propTypes: {
    palettes: React.PropTypes.array,
    listener: React.PropTypes.func,
    detailed: React.PropTypes.bool
  },

  render: function() {
    var self = this;
    return (
      <div className='palettes__main'>
        {self.props.palettes.map(function(item) {
          return <Palette palette={item} key={item} detailed={self.props.detailed} />;
        })}
      </div>
    )
  },

  componentDidUpdate: function() {
    this._listenForClicks();
  },

  _listenForClicks: function() {
    if (typeof this.props.listener === "function") {
      this.props.listener();
    }
  }

});

module.exports = Palettes
