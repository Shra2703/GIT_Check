// Anime card component

import { Component } from "react";

class Animecard extends Component {
  render() {
    const { animeName, animeImg, about, isAbout, isChar, charaters } =
      this.props.animeSeries;

    const { animeSeries, handleClick, handleClickChar } = this.props;
    return (
      <>
        <div className="card">
          <img src={animeImg} alt={animeName} />
          <div className="footer">
            <p className="text">{animeName}</p>
            
            <div>
              <button onClick={() => handleClickChar(animeSeries)}>
                Characters
              </button>
              <button onClick={() => handleClick(animeSeries)}>
                About show
              </button>
            </div>
          </div>
          <hr />

          {/* characher section  */}

          <div className={isChar ? "charMain" : null}>
            {isChar ? (
              charaters.map((charList) => (
                <div className="charDiv">
                  <img src={charList.chImg} className="charImg" />
                  <p>{charList.name}</p>
                </div>
              ))
            ) : (
              <p>{null}</p>
            )}
          </div>

          {/* about section of the show */}
          {isAbout ? <p className="about">"{about}" </p> : <p>{null}</p>}
        </div>
      </>
    );
  }
}

export default Animecard;
