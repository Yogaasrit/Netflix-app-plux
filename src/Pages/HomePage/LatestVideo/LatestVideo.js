import React from 'react'

const LatestVideo = (props) => {
  return (

    <div>
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.description}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.views}</li>
                    <li className="list-group-item">{props.publised}</li>
                </ul>
            </div>
        </div>
    </div>

  )
}

export default LatestVideo;