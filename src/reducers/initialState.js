import * as sortTypes from '../constants/SortTypes'
import * as filterTypes from '../constants/FilterTypes'

export const todoList = [
    {
        id: 0,
        title: '#1 task',
        description: 'Add a task with title',
        completed: true
    },
    {
        id: 1,
        title: '#2 task',
        description: 'Task list is sorted in reverse order by the task title',
        completed: false
    },
    {
        id: 2,
        title: '#3 task',
        description: 'Edit a task',
        completed: false
    },
    {
        id: 3,
        title: '#4 task',
        description: 'Mark as done',
        completed: false
    },
    {
        id: 4,
        title: '#5 task',
        description: 'Should be able to delete',
        completed: false
    }
]

export const visibilitySettings = {
    sortBy: sortTypes.SORT_BY_TITLE,
    sortOrder: sortTypes.SORT_DESC,
    filter: filterTypes.SHOW_ALL
}
