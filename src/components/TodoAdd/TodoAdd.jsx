import React from 'react'
import PropTypes from 'prop-types'
import TodoDialog from '../TodoDialog/TodoDialog'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import {
  Button
} from '@material-ui/core'
import './todoAdd.css'

class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        title: undefined,
        description: undefined,
      },
      open: false
    }
  }

  handleClickAdd = () => {
    this.setState({
      open: true
    });
  };

  handleClickCancel = () => {
    this.setState({
      open: false
    })
  }

  handleUpdateTitle = title => {
    this.setState({
      todo: {
        ...this.state.todo,
        title: title
      }
    })
  }

  handleUpdateDescription = (description) => {
    this.setState({
      todo: {
        ...this.state.todo,
        description: description
      }
    })
  }

  handleClickSave = () => {
    this.props.addTodo(this.state.todo)
    this.setState({
      todo: {
        title: undefined,
        description: undefined,
      },
      open: false
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickAdd}>
          <AddCircleOutlineIcon/>
        </Button>
        <TodoDialog
          open={this.state.open}
          todo={this.state.todo}
          handleClickSave={this.handleClickSave}
          handleClickCancel={this.handleClickCancel}
          handleUpdateTitle={this.handleUpdateTitle}
          handleUpdateDescription={this.handleUpdateDescription}
        />
      </div>
    )
  }
}

TodoAdd.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default TodoAdd