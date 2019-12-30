import styled from 'styled-components';

const Button = styled.button`
    color: #fff;
    position: relative;
    font-size: 16px;
    padding: 10px;
    min-width: 120px;
    border-radius: 5px;
    background-color: ${props => props.disabled ? '#6c757d' : '#007bff'};
    transition: background-color 0.3s ease, box-shadow 0.7s ease;
    &:active {
        top: 2px;
    }
    &:enabled:hover {
        background-color: #4f9cef;
        box-shadow: 0px 0px 6px 2px rgba(79,156,239,0.3);
    }
    &:focus {
        outline: none;
    } 
`
export default Button;