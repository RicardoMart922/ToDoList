import styled from "styled-components";

export const ContainerList = styled.div`
    width: 800px;

    margin-top: 10px;

    background-color: black;
    color: white;
`;


export const ItemList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;


    margin: 10px;

    background-color: gray;
`;

export const TitleText = styled.p`
    text-decoration: none;
    margin-left: 10px;
    bottom: 5px;
    left: 5px;
    font-size: 20px;
`;

export const AreaButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 150px;
    height: 40px;

    margin: 5px;
    
    border-radius: 20px;
    font-size: 20px;
`;