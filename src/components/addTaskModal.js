import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from './button';
import { addTask, closeTaskEditor, updateTask } from '../actions/actions';

const mapStateToProps = state => {
    return ({
        taskEditor: state.taskEditor
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        onAddTaskClick: (
            username,
            email,
            text
        ) => {
            dispatch(addTask(username, email, text));
            dispatch(closeTaskEditor());
        },
        onCloseClick: () => {
            dispatch(closeTaskEditor());
        },
        onChangeTaskClick: (
            text,
            status,
            id
        ) => {
            dispatch(updateTask(text, status, id));
            dispatch(closeTaskEditor());
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

const AddTask = ({onAddTaskClick, taskEditor, onCloseClick, onChangeTaskClick}) => {
    let username;
    let email;
    let text;
    let status;

    const validateEmail = email => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    if (taskEditor.mode === 'create') return (
        <StyledBackground>
            <StyledModal>
                <form>
                    <input type="text" ref={node => username=node} />
                    <input type="email" ref={node => email=node} />
                    <textarea ref={node => text=node} />
                </form>
                <Button onClick={()=>{
                    if (!username.value) {alert('Username is required!'); return;}
                    if (!email.value) {alert('Email is required!'); return;}
                    if (!text.value) {alert('Text is required!'); return;}
                    if (!validateEmail(email.value)) {alert('Invalid Email!'); return;}
                    onAddTaskClick(username.value, email.value, text.value);
                }}>ADD</Button>
            </StyledModal>
            <CloseDiv onClick={onCloseClick}></CloseDiv>
        </StyledBackground>
    );
    else if (taskEditor.mode === 'change') return (
        <StyledBackground>
            <StyledModal>
                <form>
                    <textarea ref={node => text=node} />
                    <input type="checkbox" value="Status" ref={node => status=node} />
                </form>
                <Button onClick={()=>{
                    if (!text.value) {alert('Text is required!'); return;}
                    onChangeTaskClick(text.value, status.checked, taskEditor.id);
                }}>CHANGE</Button>
            </StyledModal>
            <CloseDiv onClick={onCloseClick}></CloseDiv>
        </StyledBackground>
    )
    else return <div></div>
};

const AddTaskModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTask);

export default AddTaskModal;