import React from 'react'
import PropTypes from 'prop-types'
import {
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/FilterTypes'


const TodoFilter = (props) => {
  let filter = props.visibility.filter

  const handleChange = (event) => {
    filter = event.target.value
    props.setVisibilityFilter(filter)
  }

  return (
    <FormControl>
      <Select
        id="filter-todo-list"
        value={filter}
        onChange={handleChange}
      >
        <MenuItem value={SHOW_ALL}>Show All</MenuItem>
        <MenuItem value={SHOW_ACTIVE}>Show Active</MenuItem>
        <MenuItem value={SHOW_COMPLETED}>Show Completed</MenuItem>
      </Select>
    </FormControl>
  )
}

TodoFilter.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired
}

export default TodoFilter