
import { addTodo } from '../src/reducers/'
import { ADD } from '../src/actions/'

test('add import task todo, and test result', () => {
  const addTask = addTodo([], {
    type: ADD,
    text: 'import task'
  })
  expect(addTask).toEqual([{
    text: 'import task'
  }])
})
