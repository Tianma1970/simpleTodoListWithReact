import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import About from "./components/pages/About"
import Footer from "./components/layout/Footer"

import { v4 as uuid } from "uuid"

import "./App.css"

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "clean your bike",
        completed: false
      },
      {
        id: uuid(),
        title: "dinner with wife",
        completed: false
      },
      {
        id: uuid(),
        title: "call boss",
        completed: false
      },
      {
        id: uuid(),
        title: "feed the dog",
        completed: false
      }
    ]
  }
  //Toggle complete
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

  //Delete Todo
  delTodo = id => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />

            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
