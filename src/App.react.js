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
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  _updatePalettes: function(e) {
    var updatedPalettes = this.state.palettes;
    this.state.palettes.push(JSON.parse(e.target.responseText));
    this.setState({palettes: updatedPalettes});
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
    this.router = Router({
      '/palettes/:id': function(id) {
        console.log('go to this page: ', '/palettes/' + id);
      }
    });
    this.router.configure({ html5history: true });
    this.router.init();
  }

});

module.exports = App;
