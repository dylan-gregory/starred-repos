import React, { Component } from 'react';

class ErrorLoadingStarredRepos extends Component {
  render() {
    return(
      <div>
        {"No repos available! Either the person you are searching for doesn't have any starred repos, or you need to try a different username!"}
      </div>
    )
  }
};

export default ErrorLoadingStarredRepos;
