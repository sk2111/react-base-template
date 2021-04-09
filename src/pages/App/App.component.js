//libs
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
//pages
import SummaryPage from '../SummaryPage/SummaryPage.component';
import TodolistPage from '../TodolistPage/TodolistPage.component';
//components
import Header from '../../components/Header/Header.component';
//constants
import { SUMMARY_ROUTE, TODOLIST_ROUTE } from '../../utilities/routes/route.path';


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path={SUMMARY_ROUTE} exact component={SummaryPage} />
                <Route path={TODOLIST_ROUTE} exact component={TodolistPage} />
            </Switch>
        </BrowserRouter>
    );
};



export default App;