import React, { Component } from 'react';
import GitHub from 'github-api';

const gh = new GitHub();

console.log('gh', gh);

class LoadStarredRepos extends Component {
  constructor(props){
    super(props);

    console.log(this.props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);

    this.state = {
      username: '',
      repos: []
    };

  }
  handleUserSearch(e) {
    e.preventDefault();

    this.props.loading();

    const searchedUser = gh.getUser(this.state.username);
    searchedUser.listStarredRepos()
       .then(({data: reposJson}) => {
         console.log(`duder has ${reposJson.length} repos!`);
         console.log(reposJson);
         this.setState({ repos: reposJson });
         this.props.grabNewState(this.state);

       });
  }
  handleUsernameChange(e) {
    e.preventDefault();

    this.setState({ username: e.target.value });
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleUserSearch}>
          <input
            value={this.state.username}
            placeholder='Search a username'
            onChange={this.handleUsernameChange}
          />
          <button>Search!</button>
        </form>

        {this.props.children}

      </div>
    )
  }
};



export default LoadStarredRepos;
