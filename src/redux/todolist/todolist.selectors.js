import { createSelector } from 'reselect';


const selectTodolist = state => state.todolist;


export const selectTodoListItems = createSelector([selectTodolist],
    (todolist) => todolist.items);

export const selectTotalCount = createSelector([selectTodolist],
    (todolist) => todolist.items.length);

export const selectDeletedCount = createSelector([selectTodolist],
    (todolist) => todolist.deletedCount);