var React = require('react');
var Router = require('director').Router;
var Palettes = require('./Palettes.react');

var App = React.createClass({
  getInitialState: function() {
    return {
      palettes: []
    }
  },

  componentDidMount: function() {
    this._getJSON('palettes.json', this._updatePalettes);
    this._initRouter();
  },

  render: function() {
    this._loadHeader();
    return (
      <div>
        {this._loadHeader()}
        <Palettes palettes={this.state.palettes} />
      </div>
    )
  },

  _getJSON: function(url, callback) {
    console.log('in _getJSON, AJAX request');
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  _updatePalettes: function(e) {
    var statePalettes = this.state.palettes;
    statePalettes.push(JSON.parse(e.target.responseText));
    this.setState({palettes: statePalettes});
  },

  _loadHeader: function() {
    return (
      <div className='header__container'>
        <h1>HexMex</h1>
        <h2>...live colourfully...</h2>
      </div>
    )
  },

  _initRouter: function() {
    var self = this;
    self.router = Router({
      '/': self._showIndex,
      '/palettes/:id': self._showDetails
    });
    self.router.configure({ html5history: true });
    self.router.init();

    document.addEventListener('click', function(e) {
      var targetHref = e.target.attributes.href.value;
      if (targetHref && targetHref[0] === '/') {
        e.preventDefault();
        self.router.setRoute(targetHref);
      };
    })
  },

  _showIndex: function() {
    console.log('in _showIndex');
  },

  _showDetails: function(id) {
    console.log('in _showDetails, id is ', id);
  }

});

module.exports = App;
