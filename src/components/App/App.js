import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TodoFilter from '../TodoFilter/TodoFilter'
import TodoSort from '../TodoSort/TodoSort'
import TodoList from '../TodoList/TodoList'
import TodoAdd from '../TodoAdd/TodoAdd'
import {
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/FilterTypes'
import {
  SORT_ASC
} from '../../constants/SortTypes'
import {connect} from 'react-redux'
import {
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  setSortOrder,
  setVisibilityFilter,
} from '../../actions'
import './app.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <main className="main-container">
              <div className="todo-options-container">
                <TodoSort visibility={props.visibility} setSortOrder={props.setSortOrder}/>
                <TodoFilter visibility={props.visibility} setVisibilityFilter={props.setVisibilityFilter}/>
                <TodoAdd addTodo={props.addTodo}/>
              </div>
              <div className="todo-items-container">
                <TodoList
                  todos={props.todos}
                  editTodo={props.editTodo}
                  deleteTodo={props.deleteTodo}
                  completeTodo={props.completeTodo}
                />
              </div>
            </main>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

App.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  visibility: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  let {todos, visibility} = state
  if (visibility.filter === SHOW_ACTIVE) {
    todos = todos.filter(todo => !todo.completed)
  }
  if (visibility.filter === SHOW_COMPLETED) {
    todos = todos.filter(todo => todo.completed)
  }
  visibility.sortOrder === SORT_ASC ?
    todos.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1) :
    todos.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : -1)
  return {todos, visibility}
}

const mapDispatchToProps = {
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  setSortOrder,
  setVisibilityFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
