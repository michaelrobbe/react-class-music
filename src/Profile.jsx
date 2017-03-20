import React, { Component } from 'react';

class Profile extends Component {

  render() {
    console.log('Profile Props', this.props);

    if (!this.props.artist) {
      return (<div />);
    }

    return (
      <div>
        <h2>{this.props.artist.name}
        </h2>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <img src={this.props.artist.images[0].url} className="img-responsive" alt="Image" />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <span className="label label-info">Followers {this.props.artist.followers.total}</span>
            <br />
            <span className="label label-primary">Popularity {this.props.artist.popularity}</span>
          </div>
        </div>
      </div>
    );
  }

}

export default Profile;
