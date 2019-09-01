import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';
import NoMatch from './pages/NoMatch';


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component = {Feed} />
            <Route path="/Feed" component = {Feed} />
            <Route path="/New" component = {New} />
            <Route component = {NoMatch} />
        </Switch>
    );
}

export default Routes;