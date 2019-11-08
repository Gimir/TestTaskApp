import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { logIn, toggleLoginModal } from '../actions/actions';
import Button from './button';

const mapStateToProps = state => {
    return ({
        loginModal: state.loginModal
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        onLogInClick: (username, password) => {
            dispatch(logIn(username, password));
            dispatch(toggleLoginModal());
        },
        onCloseClick: () => {
            dispatch(toggleLoginModal());
        }
    });
};

const StyledBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(1, 1, 1, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CloseDiv = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
`;
const StyledModal = styled.div`
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border: 2px solid black;
    z-index: 111;
`;

const Modal = ({
    loginModal,
    onLogInClick,
    onCloseClick
}) => {

    let username;
    let password;
    if (loginModal) return (
        <StyledBackground>
            <StyledModal>
                <form>
                    <input type="text" ref={node => username=node} />
                    <input type="password" ref={node => password=node} />
                </form>
                <Button onClick={()=>{
                    if (!username.value) {alert('Username is required!'); return;}
                    if (!password.value) {alert('Password is required!'); return;}
                    onLogInClick(username.value, password.value)
                }}>Log In</Button>
            </StyledModal>
            <CloseDiv onClick={onCloseClick}></CloseDiv>
        </StyledBackground>
    )
    else return <div></div>
};

const LoginModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default LoginModal;