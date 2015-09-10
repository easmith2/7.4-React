var React = require('react');

var Palette = React.createClass({
  propTypes: {
    palette: React.PropTypes.array,
    detailed: React.PropTypes.bool
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
          {self._generatePaletteTitle(item)}
          {self._listPaletteColors(item)}
          {self._includeDetails(item)}
        </div>
      );
    })
  },

  _listPaletteColors: function(p) {
    var colourKeys = Object.getOwnPropertyNames(p.colours);
    var paletteColours = colourKeys.map(function(colKey, i) {
      var tempKey = colKey.replace(/([A-Z])/g, "-$1").toLowerCase();
      var newKey = tempKey.replace("sub-", "sub");
      return (
        <div className='palette__colour' key={p.id + colKey} style={{backgroundColor: p.colours[colKey] }}>
          <div className='palette__colourHex'>{p.colours[colKey]}</div>
          <div className='palette__colourType'>{newKey}</div>
        </div>
      )
    });
    return (
      <div className='palette__colourContainer'>
        {paletteColours}
      </div>
    )
  },

  _generatePaletteTitle: function(item) {
    var self = this;
    return (
      <div className='palette__title'>
        <div>{item.title} | {item.category}
        {self._generateNavLink(item)}
        </div>
      </div>
    )
  },

  _generateNavLink: function(item) {
    if (this.props.detailed === true) {
      return (
        <a href='/' data-js="titleHref"> | return to all palettes</a>
      )
    } else {
      return (
        <a href={'/palettes/' + item.id} data-js="titleHref"> | see details</a>
      )
    }
  },

  _includeDetails: function(item) {
    if (this.props.detailed === true) {
      return (
        <div className="palette__details">
          <ol>
            <li>Palette Title: {item.title}</li>
            <li>Palette Category: {item.category}</li>
            <li>Palette Creator/Owner: {item.user.name}</li>
          </ol>
        </div>
      )
    };
  }
});

module.exports = Palette;
