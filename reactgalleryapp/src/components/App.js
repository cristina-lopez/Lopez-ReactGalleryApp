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
  return (
    <Nav />,
    <Photo />,
    <NotFound />
  );
}

export default App;
