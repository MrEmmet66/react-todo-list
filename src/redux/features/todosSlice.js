import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		addTodoItem(state, action) {
			state.push({
				id: action.payload.id,
				title: action.payload.title,
				isDone: false,
				completedAt: action.payload.completedAt,
				category: action.payload.category
			})
		},
		updateTodoItemStatus(state, action) {
			const todo = state.find(todo => todo.id === action.payload);
			if (todo) {
				todo.isDone = !todo.isDone;
			}
		},
		deleteTodoItem(state, action) {
			return state.filter(todo => todo.id !== action.payload);
		},
	}
})

export const { addTodoItem, updateTodoItemStatus, deleteTodoItem } = todosSlice.actions;
export default todosSlice.reducer;