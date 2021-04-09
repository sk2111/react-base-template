//libs
import React from 'react';
//components
import AddTodoList from '../../components/AddTodoList/AddTodoList.component';
import PreviewTodoList from '../../components/PreviewTodoList/PreviewTodoList.component';

const TodolistPage = () => {
    return (
        <div>
            <AddTodoList />
            <PreviewTodoList />
        </div>
    );
};


export default TodolistPage;