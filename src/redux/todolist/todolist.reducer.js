import { todolistActionTypes } from './todolist.type'

const INTITIAL_STATE = {
    items: ['Hello hai']
};

const todolistReducer = (state = INTITIAL_STATE, action) => {

    switch (action.type) {
        case todolistActionTypes.ADD_TODOLIST_ITEM:
            return state;
        default:
            return state;
    }
}


export default todolistReducer;