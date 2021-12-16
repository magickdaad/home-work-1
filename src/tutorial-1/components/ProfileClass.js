import React, { Component } from 'react';

class ProfileClass extends Component {
  render() {
    return (
      <div className="profile">
        <p>Привет, {this.props.name.split(' ')[0]}!</p>
        <p>Дата регистрации: {this.props.registredAt}</p>
      </div>
    );
  }
}

export default ProfileClass;
