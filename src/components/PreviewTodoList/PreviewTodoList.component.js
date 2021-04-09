//libs
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//reselect
import { selectTodoListItems } from '../../redux/todolist/todolist.selectors';


const PreviewTodoList = ({ todoListItems }) => {
    return (
        <div>
            {
                todoListItems.map((item) => {
                    return (
                        <div key={item}>
                            <p>{item}</p>
                            <button >Delete Item</button>
                            <button >Complete Item</button>
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

export default connect(mapStateToProps)(PreviewTodoList);