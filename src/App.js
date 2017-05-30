import React, { Component } from 'react';
import './App.css';
import LoadStarredRepos from './components/LoadStarredRepos.js';
import LoadingStarredRepos from './components/LoadingStarredRepos.js';
import ErrorLoadingStarredRepos from './components/ErrorLoadingStarredRepos.js';
import ListStarredRepos from './components/ListStarredRepos.js';


class App extends Component {
  constructor(props){
    super(props);

    this.grabNewState = this.grabNewState.bind(this);
    this.loading = this.loading.bind(this);

    this.state = {
      searching: null,
      error: null,
      username: '',
      repos: []
    }
  }
  loading() {
    console.log('I really am loading!');
    this.setState({ searching: true });
  }
  grabNewState(newProps) {
    console.log('new', newProps);
    this.setState({ repos: newProps.repos, username: newProps.username, searching: false, error: newProps.error });
  }
  render() {
    return (
      <div className="App">

        <LoadStarredRepos loading={this.loading} grabNewState={this.grabNewState}>

          {(this.state.searching ? <LoadingStarredRepos /> : null)}

          { this.state.error ? <ErrorLoadingStarredRepos /> : null }

          {(this.state.repos.length === 0) && (this.state.username !== '') ? <ErrorLoadingStarredRepos /> : null }



          {(this.state.repos !== 0) ? <ListStarredRepos repos={this.state.repos} /> : null}

        </LoadStarredRepos>





      </div>
    );
  }
}

export default App;
