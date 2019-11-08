import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: black;
    border: none;
    font-size: 20px;
    line-height: 20px;
    color: #fff;
    margin: 0 auto;
    margin-top: 20px;
    display: block;    
`;

const Button = ({ onClick, children }) => {
    return (
        <StyledButton onClick={onClick}>{ children }</StyledButton>
    );
};

export default Button;