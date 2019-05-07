import React from 'react';
import {getUsers, addUser, deleteUser } from './service';

class App extends React.Component {

  state = {
    users: [],
    newUser: { 
    }
  };

  componentDidMount() {
    getUsers().then((users) => {
      this.setState({users});
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, age } = this.state.newUser;

    const user = {name, age};

    addUser(user).then((serverUser) => {
      this.setState((state) => {
        return {
          newUser: {},
          users: [...state.users, serverUser]
        };
      })
    });
  }

  handleNameChange = (event) => {
    const name = event.target.value;
    this.setState((state) => {
      return {
        ...state,
        newUser: {
          ...state.newUser,
          name
        }
      }
    });
  }

  handleAgeChange = (event) => {
    const age = event.target.value;
    this.setState((state) => {
      return {
        ...state,
        newUser: {
          ...state.newUser,
          age
        }
      }
    });
  }

  render() {
    const { users, newUser } = this.state; 

    return (
      <div>

        <h1>Users</h1>
        <ul>
          {users.map((user) => <li>Name: {user.name}, Age: {user.age}</li>)}         
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newUser.name || ''} onChange={this.handleNameChange} />
          <input type="number" value={newUser.age || 0} onChange={this.handleAgeChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
