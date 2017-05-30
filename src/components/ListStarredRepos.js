import React, { Component } from 'react';

class ListStarredRepos extends Component {
  constructor(props){
    super(props);

    this.state = {
      repos: this.props.repos
    };
  }
  componentWillReceiveProps(newProps){
    this.setState({ repos: newProps.repos });
  }
  render() {

    var repoList = this.state.repos.map(repo => {
      return (
        <li key={repo.id}>
          <div>
            <span className="repo-details">Repo Name: {repo.name}</span>
            <span className="repo-details">Created by: {repo.owner.login}</span>
            <span className="repo-details">Link to project:<a href={repo.html_url}> {repo.html_url}</a></span>
          </div>
        </li>
      )
    });

    return(
      <div>

        <ul>
          {repoList}
        </ul>

      </div>
    )
  }
};

export default ListStarredRepos;
