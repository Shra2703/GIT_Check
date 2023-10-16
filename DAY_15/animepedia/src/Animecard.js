// Anime card component

import { Component } from "react";

class Animecard extends Component {
  render() {
    const { animeName, animeImg, about, isAbout } = this.props.animeSeries;
    const { animeSeries,handleClick } = this.props;
    return (
      <>
        <div className="card">
          <img src={animeImg} alt={animeName} />
          <div className="footer">
            <p className="text">{animeName}</p>
            <button onClick={() => handleClick(animeSeries)}>About show</button>
          </div>
          {/* about section of the show */}
          <hr />
         {
            isAbout ? <p className="about">
            "{about}" </p>: <p>{null}</p>
          
         } 
        </div>
      </>
    );
  }
}

export default Animecard;
