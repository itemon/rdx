import { ADD } from './index'

const createTodo = (text = '') => {
  return {
    type: ADD,
    text
  }
}

export {
  createTodo
}
