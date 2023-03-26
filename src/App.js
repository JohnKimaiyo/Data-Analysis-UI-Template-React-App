import logo from "./logo.svg";
import "./App.css";
import PowerBI from "./Components/PowerBI";
import GoogleSheet from "./Components/GoogleSheet";
import Excel from "./Components/Excel";
import SQL from "./Components/SQL";
function App() {
  return (
    
    <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
      <PowerBI />
      <GoogleSheet />
      <Excel />
      <SQL />
    </div>
  );
}

export default App;
