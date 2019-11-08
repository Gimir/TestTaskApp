import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from './button';
import { toggleLoginModal, removeAdminMode } from '../actions/actions';

const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: grey;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const mapStateToProps = state => {
    return ({
        adminMode: state.adminMode
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        onOpenModalClick: () => {
            dispatch(toggleLoginModal());
        },
        onLogOutClick: () => {
            dispatch(removeAdminMode());
        }
    });
};

const Head = ({
    adminMode,
    onOpenModalClick,
    onLogOutClick
}) => {
    return (
        <StyledHeader>
            {adminMode ? 
                <Button onClick={onLogOutClick}>Log Out</Button> :
                <Button onClick={onOpenModalClick}>Log In</Button>
            }
        </StyledHeader>
    );
};

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(Head);

export default Header;