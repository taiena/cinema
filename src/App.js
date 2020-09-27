import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContainer from "./pages/Main/MainContainer";
import GenrePageContainer from "./pages/GenrePage/GenrePageContainer";
import ActorsPageContainer from "./pages/ActorsPage/ActorsPageContainer";
import ActorPageContainer from "./pages/ActorPage/ActorPageContainer";
import MoviePageContainer from "./pages/MoviePage/MoviePageContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path={"/"} exact component={MainContainer} />
            <Route path={"/actors"} exact component={ActorsPageContainer} />
            <Route path={"/actors/:id"} exact component={ActorPageContainer} />
            <Route path={"/movies/:id"} exact component={MoviePageContainer} />
            <Route
              path={"/genres/:name"}
              exact
              component={GenrePageContainer}
            />

            <Redirect to={"/"} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
