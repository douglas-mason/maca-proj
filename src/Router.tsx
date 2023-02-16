import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Page404 } from "./404.page";
import { StarshipFavorites } from "./starship-favorites/starship-favorites.page";
import { StarshipListPage } from "./starship-list/starship-list.page";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/list"]} component={StarshipListPage} />
          <Route exact path="/favorites" component={StarshipFavorites} />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
