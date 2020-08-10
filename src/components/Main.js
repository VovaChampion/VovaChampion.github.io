import React, { Suspense } from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './home/Home';
import NotFound from './not_found/NotFound';

function Main() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='' component={NotFound} />
        </Switch>
    </Suspense>
  )
}

export default Main;
