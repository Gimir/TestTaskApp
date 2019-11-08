import React from 'react';
import { connect } from 'react-redux';

import { changePage, changeSortOrder, changeSortDirection } from '../actions/actions';

const mapStateToProps = state => {
    return ({
        sortDirection: state.sortDirection,
        sortBy: state.sortBy,
        currentPage: state.currentPage
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        onSortFieldClick: (
            sortField,
            sortDir,
            page,
            newOrder
        ) => {
            dispatch(changeSortOrder(newOrder));
            dispatch(changePage(newOrder, sortDir, page));
        },
        onSortDirClick: (
            sortField,
            sortDir,
            page
        ) => {
            sortDir = sortDir === 'asc' ? 'desc' : 'asc';
            dispatch(changeSortDirection());
            dispatch(changePage(sortField, sortDir, page));
        }
    })
}

const Links = ({
    sortBy,
    sortDirection,
    currentPage,
    onSortDirClick,
    onSortFieldClick
}) => {
    return (
        <div>
            <div>
                <p>Sort by</p>
                <ul>
                    <li><a href="/" onClick={(e)=> {
                        e.preventDefault();
                        onSortFieldClick(sortBy, sortDirection, currentPage, 'username');
                    }}>Username</a></li>
                    <li><a href="/" onClick={(e)=> {
                        e.preventDefault();
                        onSortFieldClick(sortBy, sortDirection, currentPage, 'email');
                    }}>Email</a></li>
                    <li><a href="/" onClick={(e)=> {
                        e.preventDefault();
                        onSortFieldClick(sortBy, sortDirection, currentPage, 'id');
                    }}>ID</a></li>
                </ul>
            </div>
            <div>
                <p>Sort direction</p>
                <a  href="/" onClick={(e)=> {
                        e.preventDefault();
                        onSortDirClick(sortBy, sortDirection, currentPage);
                    }}>Change Direction</a>
            </div>
        </div>
    );
};

const Filters = connect(
    mapStateToProps,
    mapDispatchToProps
)(Links);

export default Filters;