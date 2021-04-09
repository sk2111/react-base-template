import { createSelector } from 'reselect';


const selectTodolist = state => state.todolist;


export const selectTodoListItems = createSelector([selectTodolist],
    (todolist) => todolist.items);

