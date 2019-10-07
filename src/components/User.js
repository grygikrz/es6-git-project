import React from 'react'

class User extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.avatar_url} style={{maxWidth: '100px'}}/>
        <b>Login:</b> {this.props.user.login}<br />
        <a href={this.props.user.html_url} target="_blank"><b>Link:</b> {this.props.user.html_url}</a>
      </div>
    );
  }
}

export default User;
