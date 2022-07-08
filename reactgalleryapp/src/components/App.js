import React from 'react';
import {
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Photo from './Photo';
import NotFound from './NotFound';
import SearchForm from './SearchForm';

const App = () => {
  return (
      <React.Fragment> 
        <BrowserRouter>
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" component={Photo} />
            <Route path="/notfound" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
      
  );
}

export default App;
