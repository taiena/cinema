import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import GenrePage from "./pages/GenrePage/GenrePage";
import ActorsList from "./components/ActorsList/ActorsList";
import MoviePage from "./pages/MoviePage/MoviePage";

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
            <Route path={"/actorslist"} exact component={ActorsList} />
            <Route path={"/movies/:id"} exact component={MoviePage} />
            <Route path={"/genres/:name"} exact component={GenrePage} />

            <Redirect to={"/"} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
