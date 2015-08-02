var React = require('react');
var Palette = require('./Palette.react');

var Palettes = React.createClass({
  propTypes: {
    palettes: React.PropTypes.array,
    listener: React.PropTypes.func
  },

  render: function() {
    return (
      <div className='palettes__main'>
        {this.props.palettes.map(function(item) {
          return <Palette palette={item} key={item} />;
        })}
      </div>
    )
  },

  // componentDidUpdate: function() {
  //   this._listenForClicks();
  // },
  //
  // _listenForClicks: function() {
  //   if (typeof this.props.listener === "function") {
  //     this.props.listener();
  //   }
  // }

});

module.exports = Palettes
