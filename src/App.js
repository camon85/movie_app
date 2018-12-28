import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  /*
    - Render: componentWillMount() -> render() -> componentDidMount()
    - Update: componentWillReceiveProps() -> shouldComponentUpdate() == true
              -> componentWillUpdate -> render() -> componentDidMount()
  */

  componentWillMount() {
    console.log('= componentWillMount =');
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 2000);
  }


  state = {
    movies: [
      {
        title: "Matrix",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
      },
      {
        title: "Hunger Game",
        poster: "https://imgix.bustle.com/uploads/image/2017/8/9/5846855f-3fd5-4db9-84cb-5f65ed2bd107-hunger-games.jpg?w=375&h=211&fit=crop&crop=faces&auto=format&q=70&dpr=2"
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
      },
      {
        title: "Star Wars",
        poster: "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
      },
    ]
  }

  render() {
    console.log('= render =');

    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log('= componentDidMount =');
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: '아쿠아맨',
            poster: 'http://img.movist.com/?img=/x00/05/10/29_p1.jpg'
          }
        ]
      });
    }, 1000);
  }

}

export default App;
