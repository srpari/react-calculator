import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Calculator</h1>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
