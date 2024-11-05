import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        {/* <footer>Coded by Isabel Battista</footer> */}
      </div>
    </div>
  );
}

export default App;