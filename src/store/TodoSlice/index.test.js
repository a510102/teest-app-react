import store from '../index';
import { addTodo, deleteTodo, resetTodo } from './index';

test('addTodo', () => {
  let state = store.getState().todo;
  const initialTodoCount = state.todos.length;
  store.dispatch(addTodo({id: 0, title: 'New'}));
  state = store.getState().todo;
  const newTodo = state.todos.find(todo => todo.id === 0);
  expect(newTodo?.title).toBe('New');
  expect(state.todos.length).toBeGreaterThan(initialTodoCount);
});

test('deleteTodo', () => {
  store.dispatch(addTodo({id:1, title: 'One'}));
  let state = store.getState().todo;
  const initTodoCount = state.todos.length;
  store.dispatch(deleteTodo(1));
  state = store.getState().todo;
  expect(state.todos.length).toBeLessThan(initTodoCount);
});

test('resetTodo', () => {
  let state = store.getState().todo;
  const initialTodoCount = state.todos.length;
  store.dispatch(resetTodo());
  state = store.getState().todo;
  expect(state.todos.length).toBe(0)
  expect(state.todos.length).toBeLessThanOrEqual(initialTodoCount);
});