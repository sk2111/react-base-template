//libs
import { combineReducers } from 'redux';
//reducers slice
import todolistReducer from './todolist/todolist.reducer';




const appReducer = combineReducers({
    todolist: todolistReducer
});



export default appReducer;