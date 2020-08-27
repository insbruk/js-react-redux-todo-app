import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'


const TodoDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClickCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={props.todo.title}
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          onChange={e => props.handleUpdateTitle(e.target.value)}
          fullWidth
        />
        <TextField
          defaultValue={props.todo.description}
          margin="dense"
          id="description"
          label="Description"
          multiline
          rows={4}
          onChange={e => props.handleUpdateDescription(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClickCancel} color="primary">Cancel</Button>
        <Button onClick={props.handleClickSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  )
}

TodoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  todo: PropTypes.object.isRequired,
  handleUpdateTitle: PropTypes.func.isRequired,
  handleUpdateDescription: PropTypes.func.isRequired,
  handleClickSave: PropTypes.func.isRequired,
  handleClickCancel: PropTypes.func.isRequired,
}

export default TodoDialog
