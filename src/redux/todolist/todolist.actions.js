import { todolistActionTypes } from './todolist.type';


export const addTodoListItem = (payload) => {
    return {
        type: todolistActionTypes.ADD_TODOLIST_ITEM,
        payload
    };
};

export const deleteTodoListItem = (payload) => {
    return {
        type: todolistActionTypes.DELETE_TODOLIST_ITEM,
        payload
    };
};

export const completeTodoListItem = (payload) => {
    return {
        type: todolistActionTypes.COMPLETE_TODOLIST_ITEM,
        payload
    };
};