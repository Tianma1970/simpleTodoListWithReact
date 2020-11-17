import React from "react"
import PropTypes from "prop-types"
import TodoItem from "./TodoItem"

class Todos extends React.Component {
  render() {
    const todoElements = this.props.todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    })

    return todoElements
  }
}

//propTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos
