import React from 'react';
import {
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Photo from './Photo';
import NotFound from './NotFound';

const App = () => {
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={Photo} />
        <Route path="/notfound" component={NotFound} />
      </Switch>
    </BrowserRouter>


}

export default App;
