import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Movie from "./pages/Movie/Movie";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path={"/"} exact component={Main} />
            <Route path={"/movie"} exact component={Movie} />
            <Redirect to={"/"} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
