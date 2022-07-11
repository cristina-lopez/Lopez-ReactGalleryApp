import React, {Component} from 'react';
import {
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import Photo from './Photo';
import NotFound from './NotFound';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      cats: [],
      minions: [],
      games: [],
      searchQuery: []
    };
  }

  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('minions');
    this.performSearch('games');
      
  }

  performSearch(query) {
    axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === 'cats') {
          this.setState( {cats: response.data.photos.photo} );
        } else if (query === 'minions') {
          this.setState( {minions: response.data.photos.photo} );
        } else if (query === 'games') {
          this.setState( {games: response.data.photos.photo} );
        } else {
          this.setState( {searchQuery: response.data.photos.photo} );
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <React.Fragment> 
        <BrowserRouter>
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" component={Photo} />
            <Route path="/:topic" component={PhotoContainer} />
            <Route path="/notfound" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }

}