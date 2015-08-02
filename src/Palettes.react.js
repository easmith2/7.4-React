var React = require('react');
var Palette = require('./Palette.react');

var Palettes = React.createClass({
  render: function() {
    return (
      <div className='palettes__main'>
        {this.props.palettes.map(function(item) {
          return <Palette palette={item} key={item} />;
        })}
      </div>
    )
  }

});

module.exports = Palettes
