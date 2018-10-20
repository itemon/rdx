import { combineReducers } from 'redux'
import { ADD, REMOVE, TOGGLE } from '../actions/'

const addTodo = (state = [], action) => {
  //console.log('call by action ', action)
  switch (action.type) {
    case ADD:
      return [...state, {
        text: action.text
      }]
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos: addTodo
})

export {
  addTodo
}

export default todoApp
