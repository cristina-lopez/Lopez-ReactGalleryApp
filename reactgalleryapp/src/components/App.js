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
      query: '',
      loading: true
    }; 
  } 

  componentDidMount() {
    this.performSearch();
    this.performSearch('cats');
    this.performSearch('minions');
    this.performSearch('games'); 
    
  }

  performSearch = (query = 'cats') => {
    axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
         if (query === 'cats') {
          this.setState({
            cats: response.data.photos.photo,
            query: 'cats',
            loading: false
          });
        } else if (query === 'minions') {
          this.setState({
            minions: response.data.photos.photo,
            query: 'minions',
            loading: false
          });
        } else if (query === 'games') {
          this.setState({
            games: response.data.photos.photo,
            query: 'games',
            loading: false
          });
        } else {
          this.setState({
            data: response.data.photos.photo,
            query: query,
            loading: false
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
            <Route exact path="/" render={() => 
              <PhotoContainer 
                data={this.state.cats} 
                loading={this.state.loading} 
                topic={this.state.query}
              />
            }/> 

            <Route path="/cats" render={() => 
              <PhotoContainer 
                data={this.state.cats} 
                loading={this.state.loading} 
                topic={"cats"}
              />
            }/>

            <Route path="/minions" render={() => 
              <PhotoContainer 
                data={this.state.minions} 
                loading={this.state.loading} 
                topic={"minions"}
              />
            }/>

            <Route path="/games" render={() => 
              <PhotoContainer 
                data={this.state.games} 
                loading={this.state.loading} 
                topic={"games"}
              />
            }/>

            <Route path="/search/:topic" render={() => 
              <PhotoContainer 
                data={this.state.data} 
                loading={this.state.loading} 
                topic={this.state.query}
              />
            }/>

            <Route path="*" component={NotFound} /> 
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}