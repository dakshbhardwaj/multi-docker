import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import otherPage from "./otherPage";
import fib from "./fib";

function App() {
  return (
    <Router>
      <div className="App">
        <h3>Testing Testing</h3>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>

        <div>
          <Route exact path="/" component={fib} />
          <Route exact path="/otherpage" component={otherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
