import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import TodoFilter from '../TodoFilter/TodoFilter'
import TodoSort from '../TodoSort/TodoSort'
import TodoList from '../TodoList/TodoList'
import TodoAdd from '../TodoAdd/TodoAdd'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/FilterTypes'
import {
  SORT_ASC,
  SORT_DESC,
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
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer: {
    backgroundColor: '#424242',
  }
}));

function App(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Header/>
          </Paper>
        </Grid>
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
        <Grid item xs={12}>
          <Paper className={`${classes.paper} ${classes.footer}`}>
            <Footer/>
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

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const getSortedTodos = (todos, sortOrder) => {
  switch (sortOrder) {
    case SORT_ASC:
      return todos.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)
    case SORT_DESC:
      return todos.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : -1)
    default:
      throw new Error('Unknown sort order: ' + sortOrder)
  }
}

const mapStateToProps = state => {
  let {todos, visibility} = state
  const {filter, sortOrder} = visibility
  todos = getVisibleTodos(todos, filter)
  todos = getSortedTodos(todos, sortOrder)
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
