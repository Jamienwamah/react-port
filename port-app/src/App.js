import github from "./assets/github.png";
import "./App.css";
import "./Main.css";

import Main from "./components/Main";

function Port(props) {
  const port = <"img src={github}" />;
  return port;
}
function App() {
  return (
    <div className="App">
      <Main />;
      <Port />;
    </div>
  );
}

export default App;
