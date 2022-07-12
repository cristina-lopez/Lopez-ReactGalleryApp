import React, {Component} from 'react';
import {
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';
import apiKey from '../config';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      cats: [],
      minions: [],
      games: [],
      loading: true
    }; 
  } 

  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('minions');
    this.performSearch('games'); 
  }

  performSearch = (query = 'cats') => {
    axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
         /* this.setState({
          data: response.data.photos.photo,
          loading: false});  */
         if (query === 'cats') {
          this.setState({
            cats: response.data.photos.photo,
            loading: false
          });
        } else if (query === 'minions') {
          this.setState({
            minions: response.data.photos.photo,
            loading: false
          });
        } else if (query === 'games') {
          this.setState({
            games: response.data.photos.photo,
           
          });
        } else {
          this.setState({
            data: response.data.photos.photo,
           
          });
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
          <SearchForm onSearch={this.performSearch}/>
          <Nav onClick={this.performSearch}/>
          
          <Switch>
              {/* {(this.state.loading) 
                ? (<p> Loading... </p> )
                : <Route exact path="/" render={() => <PhotoContainer data={this.state.data}/>} /> 
              } */}
              
              <Route exact path="/" render={() => <PhotoContainer data={this.state.cats}/>} /> 

              <Route path="/cats" render={() => 
                <PhotoContainer data={this.state.minions}/>
              }/>

              <Route path="/minions" render={() => 
                <PhotoContainer data={this.state.minions}/>
              }/>

              <Route path="/games" render={() => 
                <PhotoContainer data={this.state.games}/>
              }/>

              <Route path="/search/:topic" render={() => 
                <PhotoContainer data={this.state.data}/>
              } />

              <Route  path="*" render={() => {
                    <NotFound /> 
              } } /> 

          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}