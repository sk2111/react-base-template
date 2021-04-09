import { todolistActionTypes } from './todolist.type'
import produce from "immer";


const INTITIAL_STATE = {
    items: [],
    deletedCount: 0
};

const todolistReducer = produce((draft, action) => {
    switch (action.type) {
        case todolistActionTypes.ADD_TODOLIST_ITEM:
            draft.items.push(action.payload);
            break;
        case todolistActionTypes.DELETE_TODOLIST_ITEM:
            draft.items = draft.items.filter((item) => item !== action.payload);
            draft.deletedCount++;
            break;
        case todolistActionTypes.COMPLETE_TODOLIST_ITEM:
            const index = draft.items.findIndex((item) => item === action.payload);
            draft.items[index] = draft.items[index] + ' (Done)';
            break;
        default:
            break;
    }
}, INTITIAL_STATE);


export default todolistReducer;