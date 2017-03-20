import React, { Component } from 'react';

class Search extends Component {

  // Form Submission helper, parent function 'onChangeQuery'
  onSubmitMe(e) {
    e.preventDefault();

    let q = this.refs.artist.value;

    if (!q) {
      alert('please put artist name');
      return;
    }

    this.props.onChangeQuery(q);
  }

  render() {
    return (

      <form onSubmit={this.onSubmitMe.bind(this)} className="form-horizontal" role="form">
          <div className="form-group">
            <legend>Search Artist</legend>
          </div>

          <div className="form-group">
            <div className="col-sm-10">
              <input type="text" ref="artist" className="form-control" />
            </div>

            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <button type="submit" className="btn form-control btn-primary">Submit</button>
            </div>
          </div>
      </form>
    );
  }

}

export default Search;
