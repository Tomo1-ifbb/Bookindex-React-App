import React from "react";
import Booklist from "./components/Booklist";
import { BrowserRouter, Route, Link } from "react-router-dom"; //link means like <a>

//web view at "./components/app.jsx"
const App = () => {
  const languages = ["React", "Vue", "Angular"]; //array no: 0,1,2
  return (
    <BrowserRouter>
      <div>
        <h1>react app</h1>
        <ul>
          <li>
            <Link to="/">React</Link>
          </li>
          <li>
            <Link to="/vue">Vue</Link>
          </li>
          <li>
            <Link to="/angular">Angular</Link>
          </li>
        </ul>
        <hr />
        <Route
          exact
          path="/"
          render={(props) => <Booklist language={languages[0]} />}
        />
        <Route
          path="/vue"
          render={(props) => <Booklist language={languages[1]} />}
        />
        <Route
          path="/angular"
          render={(props) => <Booklist language={languages[2]} />}
        />
      </div>
    </BrowserRouter>
  );
};
export default App;
