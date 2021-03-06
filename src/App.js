import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./utils";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
