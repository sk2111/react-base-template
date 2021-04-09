//libs
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//reselect
import { selectTotalCount, selectDeletedCount } from '../../redux/todolist/todolist.selectors';

const SummaryPage = ({ totalCount, deletedCount }) => {
    return (
        <div>
            <p>Total Count : {totalCount}</p>
            <p>Deleted Count : {deletedCount}</p>
        </div>

    );
};


const mapStateToProps = createStructuredSelector({
    totalCount: selectTotalCount,
    deletedCount: selectDeletedCount,
});

export default connect(mapStateToProps)(SummaryPage);