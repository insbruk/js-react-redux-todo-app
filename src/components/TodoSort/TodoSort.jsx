import React from 'react'
import PropTypes from 'prop-types'
import SortIcon from '@material-ui/icons/Sort'
import {Button} from '@material-ui/core'
import {
  SORT_DESC,
  SORT_ASC,
} from '../../constants/SortTypes'
import './todoSort.css'

const TodoSort = ({visibility, setSortOrder}) => {
  let className
  if (visibility.sortOrder === SORT_ASC) {
    className = 'todo-sort-button-asc'
  }
  if (visibility.sortOrder === SORT_DESC) {
    className = 'todo-sort-button-desc'
  }
  const handleClick = () => {
    setSortOrder(visibility.sortOrder === SORT_ASC ? SORT_DESC: SORT_ASC)
  }
  return (
    <div>
      <Button
        onClick={handleClick}
        className={className}>
        <SortIcon/>
      </Button>
    </div>
  )
}

TodoSort.propTypes = {
  visibility: PropTypes.object.isRequired,
  setSortOrder: PropTypes.func.isRequired,
}

export default TodoSort