import styled from 'styled-components';
import { IButtonProps } from './types';


export const ButtonContainer = styled.button<IButtonProps>`
    width: 100%;
    height: 42px;
    background-color: ${({disabled}) => disabled ? '#ccc' : '#81259D'};
    color: #FFF;
    cursor: ${({disabled}) => disabled ? 'auto' : 'auto'};
    opacity: ${({disabled}) => disabled ? '0.6' : '1'};

    border: ${({disabled}) => disabled ? '0' : '1px solid #81259D'};
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor: ${({disabled}) => disabled ? 'auto' : 'pointer'};
    }
`