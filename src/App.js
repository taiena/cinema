import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import MovieList from "./pages/MovieList/MovieList";
import ActorsList from "./pages/MovieList/ActorsList";
import MovieDetail from "./pages/MovieList/MovieDetail";

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
            <Route path={"/movielist"} exact component={MovieList} />
            <Route path={"/actorslist"} exact component={ActorsList} />
            <Route path={"/movielist/:name"} exact component={MovieDetail} />
            <Redirect to={"/"} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
