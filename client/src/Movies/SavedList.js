import React from 'react';

const goHome = props => {
  props.history.push("/");
}

const SavedList = props => (
    <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list && props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div onClick={goHome} className="home-button">Home</div>
  </div>
);

export default SavedList;
