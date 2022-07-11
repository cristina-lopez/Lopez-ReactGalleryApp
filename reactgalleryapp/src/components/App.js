import React, {Component} from 'react';
import {
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
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
    this.performSearch();
    //this.performSearch('cats');
    //this.performSearch('minions');
    //this.performSearch('games'); 

  }

  performSearch = (query = 'cats') => {
    axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({cats: response.data.photos.photo});
        /* if (query === 'cats') {
          this.setState( {cats: response.data.photos.photo} );
        } else if (query === 'minions') {
          this.setState( {minions: response.data.photos.photo} );
        } else if (query === 'games') {
          this.setState( {games: response.data.photos.photo} );
        } else if (query !== 'notfound') {
          this.setState( {searchQuery: response.data.photos.photo} );
        } */
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <React.Fragment> 
        <BrowserRouter>
          <SearchForm onSearch={this.performSearch}/>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <PhotoContainer data={this.state.cats}/>} /> {/* Need to redirect this to cats*/}
            <Route path="/minions" render={() => <PhotoContainer data={this.state.minions}/>} />
            <Route path="/games" render={() => <PhotoContainer data={this.state.games}/>} />
            <Route path="/:topic" render={() => {

              <PhotoContainer data={ this.state.searchQuery }/>} 
            }/>
            {/* <Route path="/:topic" component={PhotoContainer} /> */}
            <Route exact path="/notfound" render={() => <NotFound />} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}