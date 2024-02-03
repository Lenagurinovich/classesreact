import React, { Component } from 'react';
import './App.scss'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: '',
      age: '',
      status: 200,
      // todos200: [],
      // todos404: [],
      // todos600: []
    };
  }

  newName = (event) => {
    this.setState({ name: event.target.value});
  }
  newAge = (event) => {
    this.setState({ age: event.target.value});
  }
  newStatus = (event) => {
    this.setState({ status: event.target.value});
  }

  addTodo = () => {
    const { name, todos, age, status } = this.state;
    if (name || age || status) {
      const newTodo = {
        name: name,
        age: age,
        status: status
      };
      this.setState({
        todos: [...todos, newTodo],
        name: '',
        age: '',
        status: 200
      });
    }
  }

  delTodo = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter(item => item.id !== id);
    this.setState({ todos: updatedTodos });
  }


  /*filter = () => {
    const { todos } = this.state;

    const todos200 = todos.filter(item => item.status == 200);
    const todos404 = todos.filter(item => item.status == 404);
    const todos600 = todos.filter(item => item.status == 600);

    this.setState({
      todos200: todos200,
      todos404: todos404,
      todos600: todos600,
    });

    console.log(this.state)
  }*/
 
/*  renderfilteredtodos = (arr) => {
    arr.map((item, id) => {
      item.id = id;
      <div className="task" key={id}>
                <h2>{item.name}</h2>
                <p>{`Age: ${item.age}`}</p>
                <p>{`Status: ${item.status}`}</p>
                <button onClick={() => this.delTodo(id)}>del</button> 
      </div>
    })
  }*/
  

  render() {
    const { todos, name, age, status, /*todos200, todos404, todos600*/ } = this.state;
    

    return (
      <div>
        <div className='addtodo'>
        <h1>ToDo List</h1>
        <input placeholder="name" type="text" value={name} onChange={this.newName}/>
        <input placeholder="age" type="text" value={age} onChange={this.newAge}/>
        <select name="" id="" value={status} onChange={this.newStatus}>
          <option value="200">status 200</option>
          <option value="404">status 404</option>
          <option value="600">status 600</option>
        </select>
        <button onClick={() => {this.addTodo(); /*this.filter()*/}}>SENT</button>
        </div>

        {/* <button onClick={() => this.renderfilteredtodos(todos200)}>200</button> */}

          

          {todos.map((item, id) => {
            item.id = id;
            return(

              
              <div className="task" key={id}>
                <h2>{item.name}</h2>
                <p>{`Age: ${item.age}`}</p>
                <p>{`Status: ${item.status}`}</p>
                <button onClick={() => this.delTodo(id)}>del</button>
                
              </div>
              
          )}
          )}
            
        
      </div>
    );
  }
}

export default TodoList;