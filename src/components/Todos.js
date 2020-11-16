import React from "react"
import TodoItem from "./TodoItem"
//import PropTypes from "prop-types"

class Todos extends React.Component {
  render() {
    const todoElements = this.props.todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
    })

    return todoElements
  }
}

//propTypes
// Todos.PropTypes = {
//   todos: PropTypes.array.isRequired
// }

export default Todos
