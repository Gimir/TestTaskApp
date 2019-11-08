import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getPages } from '../reducers/mapStateToProps';
import { changePage } from '../actions/actions';

const mapStateToProps = state => {
    return ({
        currentPage: state.currentPage,
        pages: getPages(state.globalTaskCount, state.currentPage),
        sortBy: state.sortBy,
        sortDir: state.sortDirection
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        onChangePageClick: (field, dir, page) => {
            dispatch(changePage(field, dir, page));
        }
    })
}

const StyledDiv = styled.div`
    width: 300px;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
`;
const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: black;
    color: #fff;
    padding: 0;
`;

const Paginate = ({
    currentPage,
    onChangePageClick,
    pages,
    sortBy,
    sortDir
}) => {
    return (
        <StyledDiv>
            <StyledUl>
                <li><a onClick={(e)=> {
                    e.preventDefault();
                    onChangePageClick(sortBy, sortDir, 1);
                }} href="/" style={{color: '#fff'}}>{currentPage===1 ? undefined : 1}</a></li>
                <li><a onClick={(e)=> {
                    e.preventDefault();
                    onChangePageClick(sortBy, sortDir, pages.prevPage);
                }} href="/" style={{color: '#fff'}}>{pages.prevPage === 1 ? undefined : pages.prevPage}</a></li>
                <li><a href="/" style={{color: 'blue'}} onClick={e=>{
                    e.preventDefault();
                }}>{currentPage}</a></li>
                <li><a onClick={(e)=> {
                    e.preventDefault();
                    onChangePageClick(sortBy, sortDir, pages.nextPage);
                }} href="/" style={{color: '#fff'}}>{pages.nextPage === pages.pageCount ? undefined : pages.nextPage}</a></li>
                <li><a onClick={(e)=> {
                    e.preventDefault();
                    onChangePageClick(sortBy, sortDir, pages.pageCount);
                }} href="/" style={{color: '#fff'}}>{currentPage===pages.pageCount ? undefined : pages.pageCount}</a></li>
            </StyledUl>
        </StyledDiv>
    );
};

const Pagination = connect(
    mapStateToProps,
    mapDispatchToProps
)(Paginate);

export default Pagination;

