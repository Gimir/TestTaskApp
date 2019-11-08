import React from 'react';
import styled from 'styled-components';

import Button from './button';

const StyledDiv = styled.div`
    width: 50%;
    height: 160px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: grey;
    border: 2px solid black;
`;

const Task = ({
    username,
    email,
    text,
    status,
    onEditClick,
    adminMode
}) => {
    return (
        <StyledDiv>
            <ul>
                <li>User: {username}</li>
                <li>Email: {email}</li>
                <li>{text}</li>
                <li>Status: {status ? 'complete' : 'not complete'}</li>
            </ul>
            {adminMode ? <Button onClick={onEditClick}>Edit</Button> : undefined}
        </StyledDiv>
    );
};

export default Task;