import { todolistActionTypes } from './todolist.type'
import produce from "immer";


const INTITIAL_STATE = {
    items: ['Item 1']
};

const todolistReducer = produce((draft, action) => {
    switch (action.type) {
        case todolistActionTypes.ADD_TODOLIST_ITEM:
            draft.items.push(action.payload);
            break;
        default:
            break;
    }
}, INTITIAL_STATE);


export default todolistReducer;