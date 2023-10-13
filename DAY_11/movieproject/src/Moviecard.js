import React from "react";

class Moviecard extends React.Component {
  starCount = 0;
  rating = 5;
  // constructor for state
  constructor() {
    super();
    this.state = {
      title: "The Avengers!",
      plot: "Supernatural powers are there in this movie",
      price: 199,
      rating: 8.9,
    };
    // we can bind it here or bind when we are passing the refrence or we can use arrow function.
    this.incStars = this.incStars.bind(this);
  }
  incStars() {
    console.log("increase the count");

    // if (this.rating <= 5) this.starCount++;
  }
  descStars = () => {
    console.log("decrease the count");
    // if (this.rating >= 0) this.starCount--;
  }
  render() {
    // destructring the data
    const { plot, price, rating } = this.state;

    return (
      <>
        <div className="main">
          <div className="movie-card">
            {/* left side of movie card */}
            <div className="left">
              <img
                src="https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg"
                alt="poster"
              />
            </div>

            {/* right side of  movie card*/}
            <div className="right">
              <div className="title">{this.state.title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs. {price}</div>

              {/* footer under right side */}
              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                    alt="rating desc"
                    className="str-btn"
                    onClick={this.descStars}
                  />

                  <img
                    src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                    alt="rating"
                    className="stars"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                    alt="rating inc"
                    className="str-btn"
                    onClick={this.incStars}
                  />

                  <span className="starCount">{this.starCount}</span>
                </div>
                <button className="favourite-btn">Favourite</button>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <h1>Moviecard</h1>
      </>
    );
  }
}

export default Moviecard;
