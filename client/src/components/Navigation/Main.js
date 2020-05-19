import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Beers from '../Pages/Beers';
import NewBeer from '../Pages/NewBeer';
import EditBeer from '../Pages/EditBeer';
import NoMatch from '../Navigation/NoMatch';

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={Beers} />
            <Route exact path='/beers/new' component={NewBeer} />
            <Route exact path='/beers/:id' component={EditBeer} />
            <Route component={NoMatch} />
        </Switch>
    );
}
