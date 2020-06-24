import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'by some milk'},
      {id: 2, content: 'cook food'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  
  render() {
    return (
      <div className="container">
        <h1>My todo app</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
      
    );
  }

}

export default App;
