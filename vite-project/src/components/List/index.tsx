import React from "react";

import { ContainerList, ItemList, Item, Button, AreaButton, TitleText } from "./styles";

interface IList {
    tasks: string[];
    editTask: (index: number) => void;
    removeTask: (index:number) => void;
}

const List: React.FC<IList> = ({ tasks, removeTask, editTask }) => {

    return(
       <ContainerList>
            <ItemList>
                {tasks.map((task, index) => (
                    <Item key={index}>
                        <TitleText>{task}</TitleText>
                        <AreaButton>
                            <Button onClick={() => editTask(index)}>Editar</Button>
                            <Button onClick={() => removeTask(index)}>Remover</Button>
                        </AreaButton>
                    </Item>
                ))}
            </ItemList>
       </ContainerList> 
    )
}

export default List;