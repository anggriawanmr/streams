import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Click to see page two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">Click to see page one</Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
