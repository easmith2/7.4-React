var React = require('react');

var Palette = React.createClass({
  propTypes: {
    palette: React.PropTypes.array
  },

  render: function() {
    var tempTitle = this._listPalettes();
    return (
      <div className='palettes__main'>
        {tempTitle}
      </div>
    );
  },

  _listPalettes: function() {
    var self = this;
    var allPalettes = self.props.palette;

    return allPalettes.map(function(item) {
      return (
        <div className='palette__container' key={item.id}>
          <div className='palette__title'>
            <div>{item.title} | {item.category} |
            <a href={'/palettes/' + item.id} data-js="titleHref"> see details</a>
            </div>
          </div>
          <div className='palette__colourContainer'>
            {self._listPaletteColors(item)}
          </div>
        </div>
      );
    })
  },

  _listPaletteColors: function(p) {
    var colourKeys = Object.getOwnPropertyNames(p.colours);
    var colourTypes = ['dominant', 'contrasting-dominant', 'subdominant', 'contrasting-subdominant', 'pop'];
    var paletteColours = colourKeys.map(function(colKey, i) {
      return (
        <div className='palette__colour' key={p.id + colKey} style={{backgroundColor: p.colours[colKey] }}>
          <div className='palette__colourHex'>{p.colours[colKey]}</div>
          <div className='palette__colourType'>{colourTypes[i]}</div>
        </div>
      )
    });
    return (
      paletteColours
    )
  }

});

module.exports = Palette;
