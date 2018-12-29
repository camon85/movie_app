import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  /*
    - Render: componentWillMount() -> render() -> componentDidMount()
    - Update: componentWillReceiveProps() -> shouldComponentUpdate() == true
              -> componentWillUpdate -> render() -> componentDidMount()
  */
  state = {}

  componentWillMount() {
    console.log('= componentWillMount =');
  }


  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie key={movie.id}
      title={movie.title_english} 
      poster={movie.large_cover_image} 
      genres={movie.genres}
      synopsis={movie.synopsis}
       />
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  render() {
    console.log('= render =');
    const movies = this.state.movies;
    return (
      <div className={movies ? 'App' : 'App--loading'}>
        {movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }

  componentDidMount() {
    console.log('= componentDidMount =');
    this._getMovies();
  }

}

export default App;
