import React             from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage }      from '../pages/HomePage';

import { CounterPage }   from '../pages/CounterPage';
import { FriendsPage }    from '../pages/FriendsPage';
import { AboutPage }     from '../pages/AboutPage';
import NotFoundPage      from '../pages/NotFoundPage';


interface RouterProps {
}

// <Route path="/counter"     component={CounterPage} />;
export function Router(props: RouterProps){
  return (
    <Switch>  
      <Route exact path="/"      component={HomePage} />
      <Route path="/friends"     component={FriendsPage} />;
      <Route path="/counter"     component={CounterPage} />;
      <Route exact path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}
