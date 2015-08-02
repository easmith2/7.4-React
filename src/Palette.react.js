var React = require('react');

var Palette = React.createClass({
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
            <a onClick={self._updateUrl(item.id)} href={'/palettes/' + item.id}>{item.title} | {item.category}</a>
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
  },

  _handleClick: function(e) {

  },

  _updateUrl: function(e) {
    var path = '/palettes/' + e;
    history.pushState(null, null, path);
    this._parseUrl();
  },

  _parseUrl: function() {
    splitPath = window.location.pathname.split('/');
    if (splitPath[1] === '') {
      console.log("I should be the index");
    } else if (splitPath[1] === 'palettes') {
      var id = splitPath[2];
      console.log("I should be the details for palette id " + id);
    } else {
      alert('Something went horribly, horribly wrong.');
    };
  }

});

module.exports = Palette;
