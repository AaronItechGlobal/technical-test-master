import logo from "./Transparent.png";
import "./App.css";
import Users from "./components/Users";



function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content"></div>
      <Users/>
    </div>
  );
}

export default App;
