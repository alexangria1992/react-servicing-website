import React from 'react'
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #fff;
    padding: 6px 1.3em; 
    font-size: 18px;
    font-weight: 600;
    border-radius: 3px;
    background-color: #2a9D8F;
    cursor: pointer;
    transition: all 200ms ease-in-out; 

    &:hover{
        background-color: #21867a;
    }

    &:focus{
        outline: none;
    }


`;

export function Button(props){
   return <ButtonWrapper>{props.children}</ButtonWrapper>
}