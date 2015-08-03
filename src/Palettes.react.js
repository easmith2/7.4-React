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
    var self = this;
    var refs = document.querySelectorAll('[data-js="titleHref"]');
    for (var i=0; i < refs.length; i++) {
      refs[i].addEventListener('click', function(e) {
        var targetHref = e.target.attributes.href.value;
        if (targetHref && targetHref[0] === '/') {
          e.preventDefault();
          self.props.listener(targetHref);
        };
      })
    };
  },

});

module.exports = Palettes
