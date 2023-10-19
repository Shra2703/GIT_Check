import React from "react";
import MovieList from "./MovieList";
import "./style.css";
import Navbar from "./Navbar";
import { movies } from "./MovieData";
import MovieListProps from "./MovieListProps";

function App1() {
  return (
    <>
      <Navbar />
      <MovieList />
    </>
  );
}

class App extends React.Component {
  // constructor for state
  constructor() {
    super();
    this.state = {
      movies: movies,
    };
  }

  // increase the stars function
  handleIncStars = (movie) => {
    const { movies } = this.state;
    console.log("movie", movie);
    const mid = movies.indexOf(movie);
    if (movies[mid].starCount >= 5) {
      return;
    }

    movies[mid].starCount += 0.5;
    this.setState({
      movies: movies,
    });
  };

  // decrease the stars function
  handleDescStars = (movie) => {
    console.log("decrease the count");
    const { movies } = this.state;
    let mid = movies.indexOf(movie);
    if (movies[mid].starCount <= 0) {
      return;
    }
    movies[mid].starCount -= 0.5;
    console.log("2ns", movies);
    this.setState({
      movies: movies,
    });
    console.log(movies);
  };

  // handle the favourite btn
  handleFavourite = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies,
    });
  };

  // handle the cart btn
  handleCart = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    this.setState({
      movies: movies,
    });
  };

  render() {
    const {
      movies,
      handleIncStars,
      handleDescStars,
      handleFavourite,
      handleCart,
    } = this.state;
    return (
      <>
        <Navbar />
        <MovieListProps
          movies={movies}
          handleIncStars={handleIncStars}
          handleDescStars={handleDescStars}
          handleFavourite={handleFavourite}
          handleCart={handleCart}
        />
      </>
    );
  }
}

export default App;
