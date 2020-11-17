import React from "react"
import PropTypes from "prop-types"

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  render() {
    const { id, title } = this.props.todo
    const btnStyle = {
      background: "#ff0000",
      color: "#fff",
      border: "none",
      padding: "5px 10px",
      borderRadius: "50px",
      cursor: "pointer",
      float: "right"
    }
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    )
  }
}
//propTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem
