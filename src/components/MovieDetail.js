import React from "react";
/**
 * Displays a single movie
 *
 * @param {Object} props
        id,
    rankIMDb,
    Title,
    Genre,
    ReleaseYear,
    Plot,
    ImageURL,
    VideoURL,
    Actor1,
    Actor2,
    Actor3,
    Director,
*/

function MovieDetail(props) {
  return (
    <div className="ui component">
      <div className="item" key={props.id}>
        <div className="ui small image">
          <img src={props.ImageURL} alt="" />
        </div>
        <div className="content">
          <div className="header">{props.id}</div>
          <div className="meta">
            {" "}
            <span>{props.Title}</span>
          </div>
          <div className="description">
            {" "}
            <i className="euro sign icon"></i>
            {props.Plot}{" "}
          </div>
          <div className="extra">
            {" "}
            <i className="boxes icon"></i>
            {props.Director}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
