import React, {Component}  from 'react'
import UsersList from './UsersList'
import User from './User'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      users: []
    };
  }

  onChangeHandle(event) {
    this.setState({searchText: event.target.value});
  }

  onSubmit(event) {
    document.querySelector('.result').style.display = 'block';
    document.querySelector('form').style.top = '10px';
    event.preventDefault();
    const {searchText} = this.state;
    const url = `https://api.github.com/search/users?q=${searchText}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.setState({users: responseJson.items}));
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.onSubmit(event)}>
              <input
                type="text"
                id="searchText"
                placeholder="Search by user name"
                onChange={event => this.onChangeHandle(event)}
                value={this.state.searchText}/><i class="fa fa-search"></i>
        </form>
        <div className="result" style={{display:'none'}}>
          <UsersList users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
