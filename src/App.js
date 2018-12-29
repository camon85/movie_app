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
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 2000);
  }


  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
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
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  render() {
    console.log('= render =');

    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }

  componentDidMount() {
    console.log('= componentDidMount =');
    this._getMovies();
  }


}

export default App;
