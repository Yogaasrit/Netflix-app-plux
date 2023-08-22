import { Component } from 'react';
class TrendingVideoList extends Component {
  constructor () {
    super(); // just to call component
    this.x = 10; // public variable
  }

  // We need constructor to create a public variable
  // In updated version below script is enuough
  y = 10;
  state = {
    videos: [
      {
        id: 1,
        trendingRank: 1,
        title: 'Man Vs Wild',
        thumbnailUrl: 'https://placehold.co/280x200',
        desc: 'A Wild Adventure show in Discovery Channel',
        views: '700K',
        publishedOn: '1 week ago'
      },
      {
        id: 2,
        trendingRank: 2,
        title: 'Planet Earth II',
        thumbnailUrl: 'https://placehold.co/280x200',
        desc: 'A show by David Attenborough on BBC Earth Channel',
        views: '900K',
        publishedOn: '2 weeks ago'
      }
    ],

    videoResolution: '4k'
  }

  handleChangeResolution = () => {
    this.setState(
      {
        videoResolution: '8k'
      }
    )
  };

  render () {
    return (
      <div className="row">

        <p>videoResolution : Enjoy Watching the {this.state.videoResolution} {' '}
          <button type='button'
            className='btn btn-primary btn-sm'
            onClick = {this.handleChangeResolution}
          >
                    Change Resolution

          </button>
        </p>

        <div className="col-md-3">

          <div className="card">
            <img src={this.state.videos[0].thumbnailUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className={this.state.videos[0].trendingRank}>{this.state.videos[0].title}</h5>
              <p>{this.state.videos[0].desc}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{this.state.videos[0].views}</li>
                <li className="list-group-item">{this.state.videos[0].publishedOn}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3">

          <div className="card">
            <img src={this.state.videos[1].thumbnailUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className={this.state.videos[1].trendingRank}>{this.state.videos[1].desc}</h5>
              <p>{this.state.videos[1].desc}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{this.state.videos[1].views}</li>
                <li className="list-group-item">{this.state.videos[1].publishedOn}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TrendingVideoList;
