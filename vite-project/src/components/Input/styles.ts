import styled from "styled-components";

export const ContainerInput = styled.div`
    width: 800px;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: black;
`;

export const Form = styled.form`
    margin-left: 10px;
    overflow: hidden;
    position: relative;
    width: 70%;
`;

export const InputTask = styled.input`
    color: #fff;
    font-size: 20px;
    width: 100%;
    padding: 20px 5px 5px;
    background-color: #4f4f4f;
    border: none;
    border-radius: 4px;

    &:focus + label span,
    &:valid + label span {
        transform: translateY(-150%);
        font-size: 14px;
        bottom: 10px;
        color: #fff;
    }
    
    &:focus + label::after,
    &:valid + label::after {
        transform: translateX(0%);
    }
`;

export const Label = styled.label`
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid #ffffff;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 100%;
        border-bottom: 3px solid #8e44ad;
        transform: translateX(-100%);
        transition: all 0.3s ease;
    }

`;

export const Span = styled.span`
    position: absolute;
    bottom: 5px;
    left: 5px;
    font-size: 28px;
    transition: all 0.3s ease;
`;

export const Button = styled.button`
    width: 150px;
    height: 50px;
    margin-right: 10px;

    font-size: 20px;

    border-color: #8e44ad;
    border-radius: 0;
    color: #8e44ad;
    position: relative;
    overflow: hidden;
    z-index: 1;
    -webkit-transition: color 150ms ease-in-out;
    transition: color 150ms ease-in-out;

    &::after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
        width: 0;
        height: 100%;
        background: #8e44ad;
        z-index: -1;
        -webkit-transition: width 150ms ease-in-out;
        transition: width 150ms ease-in-out;
    }
    
    &:hover {
        color: #fff;
    }

    &:hover:after {
        width: 110%;
    }
`;