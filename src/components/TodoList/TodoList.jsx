import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'
import TodoDialog from '../TodoDialog/TodoDialog'
import './todoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      todo: {
        title: undefined,
        description: undefined,
        status: undefined,
      }
    }
  }

  handleClickEdit = (todo) => {
    console.log(todo)
    this.setState({
      open: true,
      todo: {...todo}
    })
  }

  handleUpdateTitle = title => {
    this.setState({
      todo: {
        ...this.state.todo,
        title: title,
      }
    })
  }

  handleUpdateDescription = description => {
    this.setState({
      todo: {
        ...this.state.todo,
        description: description,
      }
    })
  }

  handleClickCancel = () => {
    this.setState({
      open: false,
      todo: {
        title: undefined,
        description: undefined,
        status: undefined,
      }
    })
  }

  handleClickSave = () => {
    this.props.editTodo(this.state.todo)
    this.setState({
      open: false,
      todo: {
        title: undefined,
        description: undefined,
        status: undefined,
      }
    })
  }

  handleClickDelete = (id) => {
    this.props.deleteTodo(id)
  }

  handleClickDone = (id) => {
    this.props.completeTodo(id)
  }

  render() {
    return (
      <>
        {
          this.props.todos.map(todo => (
              <TodoItem
                todo={todo}
                key={`todo-${todo.id}`}
                handleClickDone={this.handleClickDone}
                handleClickEdit={this.handleClickEdit}
                handleClickDelete={this.handleClickDelete}
              />
            )
          )
        }
        <TodoDialog
          open={this.state.open}
          todo={this.state.todo}
          handleClickSave={this.handleClickSave}
          handleClickCancel={this.handleClickCancel}
          handleUpdateTitle={this.handleUpdateTitle}
          handleUpdateDescription={this.handleUpdateDescription}
        />
      </>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
}

export default TodoList