//libs
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//actions
import { deleteTodoListItem, completeTodoListItem } from '../../redux/todolist/todolist.actions';
//reselect
import { selectTodoListItems } from '../../redux/todolist/todolist.selectors';


const PreviewTodoList = ({ todoListItems, deleteTodoListItem, completeTodoListItem }) => {
    return (
        <div>
            {
                todoListItems.map((item) => {
                    return (
                        <div key={item}>
                            <p>{item}</p>
                            <button onClick={() => deleteTodoListItem(item)}>Delete Item</button>
                            <button onClick={() => completeTodoListItem(item)}>Complete Item</button>
                        </div>
                    )
                })
            }
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    todoListItems: selectTodoListItems
});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodoListItem: (item) => dispatch(deleteTodoListItem(item)),
        completeTodoListItem: (item) => dispatch(completeTodoListItem(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewTodoList);