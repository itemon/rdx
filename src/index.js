/*
import { ADD, REMOVE } from './actions/'
import * as s from './actions/'

console.log('action add: %d, action remove: %d', ADD, REMOVE)
console.log(s)
*/

import todoApp from './reducers/'
import { createStore } from 'redux'
import { createTodo } from './actions/creator'

const store = createStore(todoApp)

store.subscribe((state) => {
  console.log('state ', store.getState())
})
store.dispatch(createTodo('important task'))

