import React from "react"
import Todos from "./components/Todos"

import "./App.css"

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "clean your bike",
        completed: false
      },
      {
        id: 2,
        title: "dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "call boss",
        completed: false
      },
      {
        id: 4,
        title: "feed the dog",
        completed: false
      }
    ]
  }
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  render() {
    return <Todos todos={this.state.todos} markComplete={this.markComplete} />
  }
}

export default App
