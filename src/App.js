import React, { Component } from 'react';
import Profile from './Profile';
import Search from './Search';
import Songs from './Songs';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      artist: null,
      topTracks: null,
    }
  }

  // Uses Search Query box to update this.state
  changeQuery(q) {
    this.setState({query: q}, () => {
      this.getMusicData();
    })
  }

  // Runs AJAX request on spotify for artist matching query.
  // Updates artist data + runs query to fetch songs
  getMusicData() {
    const query = encodeURIComponent(this.state.query);
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;

    fetch(url, {
      method: 'GET',
    }).then((response) => {
      return response.json();
    }).then((j) => {
      this.setState({artist: j.artists.items[0]});
      this.getSongs(j.artists.items[0].id);
    }).catch((err) => {
      console.log('error is ', err)
    })
  }


  // Runs AJAX request for top tracks of artist queried for
  getSongs(id) {
    const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`;

    fetch(url, {
      method: 'GET',
    }).then((response) => {
      return response.json();
    }).then((j) => {
      this.setState({topTracks: j.tracks});
    }).catch((err) => {
      console.log('error is ', err)
    })
  }

  render() {
    return (
      <div className="App container">
        <h2 className="text-center">Music Master <small>listening wizard</small></h2>

        <div className="row">
          <div className="col-xs-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <Search onChangeQuery={this.changeQuery.bind(this)} />
            <Profile artist={this.state.artist} />
            <Songs topTracks={this.state.topTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
