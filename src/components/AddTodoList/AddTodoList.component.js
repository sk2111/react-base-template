//libs
import React, { useState } from 'react';
import { connect } from 'react-redux';
//actions
import { addTodoListItem } from '../../redux/todolist/todolist.actions';

const AddTodoList = ({ addTodoListItem }) => {

    const [todoItem, setTodoItem] = useState('');

    const addTodoItem = () => {
        if (!todoItem) return;
        addTodoListItem(todoItem);
        setTodoItem('');
    };

    return (
        <div>
            <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
            <button onClick={addTodoItem}>Add Item</button>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        addTodoListItem: (item) => dispatch(addTodoListItem(item))
    };
};

export default connect(null, mapDispatchToProps)(AddTodoList);