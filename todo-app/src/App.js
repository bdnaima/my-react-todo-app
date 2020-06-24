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
       <header className="text-center text-light my-4">
          <h1 className="mb-4">My todo app</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <form className="search">
            <input className="form-control m-auto" type="text" name="search" placeholder="search todos"/>
          </form>
        </header>
      </div>
      
    );
  }

}

export default App;
