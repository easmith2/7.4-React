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
        <a href={'/'} data-js="titleHref"> | return to all palettes</a>
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
          <h4>Palette Title: {item.title}</h4>
          <h4>Palette category: {item.category}</h4>
          <h4>Palette Creator/Owner: {item.user.name}</h4>
          <h4>Palette Composition:</h4>
          <ol>
            <li>{item.colours.dominant}</li>
            <li>{item.colours.contrastingDominant}</li>
            <li>{item.colours.subDominant}</li>
            <li>{item.colours.contrastingSubDominant}</li>
            <li>{item.colours.pop}</li>
          </ol>
        </div>
      )
    };
  }

});

module.exports = Palette;
