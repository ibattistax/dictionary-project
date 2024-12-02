import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <span className="dots">•••</span>
        <header className="App-header">
          <h1>English Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
