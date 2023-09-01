import React from 'react';
import PropTypes from 'prop-types';

const TrendingVideoItems = (props) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <img src={props.thumbnailUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className={props.trendingRank}>{props.title}</h5>
            <p>{props.desc}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.views}</li>
              <li className="list-group-item">{props.publishedOn}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

TrendingVideoItems.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  trendingRank: PropTypes.number,
  desc: PropTypes.string,
  views: PropTypes.string,
  publishedOn: PropTypes.string
};

export default TrendingVideoItems;
