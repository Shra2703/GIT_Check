import React from "react";

// array for mood
const Mood = [
  {
    mood: "happy 😁",
    quote: "Happiness is a warm puppy.",
  },
  {
    mood: "angry 😡",
    quote: "Choose kindness over anger.",
  },
  {
    mood: "sad 😟",
    quote: "Sadness flies away on the wings of time.",
  },
  {
    mood: "excited 😄",
    quote: "The idea of waiting for something makes it more exciting.",
  },
  {
    mood: "fearful 😱",
    quote: "The only thing we have to fear is fear itself.",
  },
  {
    mood: "disgusted 🤮",
    quote: "Disgust is the appropriate response to most situations.",
  },
  {
    mood: "surprised 🙀",
    quote: "Surprise is the greatest gift which life can grant us.",
  },
];

// class component
class Moodpredict extends React.Component {
  constructor() {
    super();
    this.state = {
      paraText: null,
      quoteText: null,
    };
  }

  //   handle click function
  handleClick = () => {
    const moodIndex = Math.floor(Math.random() * Mood.length);
    this.setState({
      paraText: Mood[moodIndex].mood,
      quoteText: Mood[moodIndex].quote,
    });
  };

  //   render function to render the component
  render() {
    return (
      <>
        <h1>Mood Predictor!!😯😱😐😂😃</h1>
        <div className="main">
          <div className="inside">
            <h2>Predict your mood!!!</h2>
            {this.state.paraText && (
              <>
                <p>
                  Mood predictor has predict that your mood will be{" "}
                  <b>
                    <i>{this.state.paraText} </i>
                  </b>
                  today!!
                </p>
                <p>
                  <i>"{this.state.quoteText}"</i>
                </p>
              </>
            )}
            <button onClick={this.handleClick}>Click Me to Predict!</button>
          </div>
        </div>
      </>
    );
  }
}
export default Moodpredict;
