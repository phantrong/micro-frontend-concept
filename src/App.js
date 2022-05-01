import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from 'history';

const defaultHistory = createBrowserHistory();

function App(props) {
  return (
    <Router history={props.history || defaultHistory}>
        <div className="content-page">
          <h1>Khái niệm</h1>
          <p>
          Good frontend development is hard. Scaling frontend development so that many teams can work simultaneously on a large and complex product is even harder. In this article we'll describe a recent trend of breaking up frontend monoliths into many smaller, more manageable pieces, and how this architecture can increase the effectiveness and efficiency of teams working on frontend code. As well as talking about the various benefits and costs, we'll cover some of the implementation options that are available, and we'll dive deep into a full example application that demonstrates the technique.
          </p>
        </div>
    </Router>
  );
}

export default App;
