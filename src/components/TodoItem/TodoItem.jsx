import React from 'react'
import PropTypes from 'prop-types'
import './todoItem.css'
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'


const TodoItem = (props) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h6" component="h2">
        {props.todo.title}
      </Typography>
      <Typography variant="body2" component="p">
        {props.todo.description}
      </Typography>
    </CardContent>
    <CardActions style={{justifyContent: 'center'}}>
      <Typography variant="body2" component="p">Completed: {props.todo.completed.toString()}</Typography>
      <Button onClick={() => props.handleClickDone(props.todo.id)} size="small"><DoneIcon/></Button>
      <Button onClick={() => props.handleClickEdit(props.todo)} size="small"><EditIcon/></Button>
      <Button onClick={() => props.handleClickDelete(props.todo.id)} size="small"><DeleteIcon/></Button>
    </CardActions>
  </Card>
)

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleClickDone: PropTypes.func.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
}

export default TodoItem
