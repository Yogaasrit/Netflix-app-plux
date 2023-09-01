import { Component } from 'react';
import TrendingVideoItems from './TrendingVideoItems/TrendingVideoItems';
class TrendingVideoList extends Component {
  constructor() {
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
  };

  handleChangeResolution = () => {
    this.setState({
      videoResolution: '8k'
    });
  };

  render() {
    return (
      <div className="row">
        <p>
          videoResolution : Enjoy Watching the {this.state.videoResolution}{' '}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handleChangeResolution}
          >
            Change Resolution
          </button>
        </p>
        {this.state.videos.map((video) => {
          return (
            <TrendingVideoItems key = {video.id}
              id={video.id}
              rank={video.trendingRank}
              title={video.title}
              desc={video.desc}
              thumbnailUrl={video.thumbnailUrl}
              views={video.views}
              publishedOn={video.publishedOn}
            />
          );
        })}
      </div>
    );
  }
}
export default TrendingVideoList;
