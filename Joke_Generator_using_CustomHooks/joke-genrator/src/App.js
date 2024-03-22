import "./App.css";
import useFetch from "./useFetch";

function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const { data, loading, error, getJoke } = useFetch(url);
  if (loading) return <p>Loading.....</p>;

  if (error) return <p>Something went wrong...</p>;
  return (
    <div className="App">
      <h1>Joke Genrator</h1>
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke}>
        Get Joke
      </button>
    </div>
  );
}

export default App;
