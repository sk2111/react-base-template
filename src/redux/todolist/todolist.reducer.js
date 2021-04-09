import { todolistActionTypes } from './todolist.type'

const INTITIAL_STATE = {
    todoList: []
};

const todolistReducer = (state = INTITIAL_STATE, action) => {

    switch (action.type) {
        case todolistActionTypes.ADD_TODOLIST_ITEM:
            return { hai: '123' };
        default:
            return state;
    }
}


export default todolistReducer;