import React, { useState } from "react";  

import {
    ContainerInput,
    InputTask,
    Form,
    Label,
    Span,
    Button
} from "./styles";

interface IInput {
    addTask: (task:string) => void;
}

const Input: React.FC<IInput> = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
          addTask(newTask);
          setNewTask('');
        }
    };

    return (
        <ContainerInput>
            <Form>
                <InputTask
                    name="titulo"
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    autoComplete="off"
                    required
                />
                <Label>
                    <Span>Título da Tarefa</Span>
                </Label>            
            </Form>
            <Button onClick={handleAddTask}>Adicionar</Button>
        </ContainerInput>
    );
}

export default Input;