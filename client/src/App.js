import React, { useState } from 'react';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import {Route} from "react-router-dom";

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route path="/" render={props => <SavedList {...props} list={savedList}/>}/>
      {/* <SavedList list={savedList} /> */}
      <Route exact path="/" render={props => <MovieList {...props} />}/>
      <Route path="/movies/:id" render={props => <Movie {...props} />}/>
    </div>
  );
};

export default App;
