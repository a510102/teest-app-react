import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, {payload}) => {
      if(payload) {
        state.todos = [payload, ...state.todos];
      }
    },
    deleteTodo: (state, {payload}) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    resetTodo: (state, {payload}) => {
      state.todos = [];
    }
  }
});

export const { addTodo, deleteTodo, resetTodo } = todoSlice.actions;
export const todoSelector = (state) => state.todo.todos;
export default todoSlice.reducer;