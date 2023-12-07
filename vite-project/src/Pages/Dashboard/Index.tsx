import React, { useState, useEffect } from "react";

import {
    Container
} from "./styles";

import Input from "../../components/Input";
import List from "../../components/List";

import { db } from "../../Services/ConnectionFirebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

interface IDashboard {
    tasks: string[];
}

const Dashboard: React.FC<IDashboard> = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [editingTask, setEditingTask] = useState<{ index: number; text: string } | null>(null);

    useEffect(() => {
        // Carregar tarefas do Firebase ao montar o componente
        const loadTasks = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "Topicos"));
            const loadedTasks = querySnapshot.docs.map((doc) => doc.data().task);
            setTasks(loadedTasks);
          } catch (error) {
            console.log(error);
          }
        };
    
        loadTasks();
    }, []);

    async function register(e) {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Topicos"), {
                task: tasks
            })
            setEditingTask(null);

        } catch (error) {
            console.log(error);
        }
    }

    const addTask = (newTask: string) => {
        if (editingTask !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editingTask.index] = newTask;
            setTasks(updatedTasks);
            setEditingTask(null);
        } else {
            setTasks([...tasks, newTask]);
        }
        register(new Event(''));
    };
    
    const removeTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        setEditingTask(null);
        register(new Event(''));    
    };

    const editTask = (index: number) => {
        setEditingTask({ index, text: tasks[index] });
      };

    return (
        <Container>
          <Input addTask={addTask}/>
          <List tasks={tasks} removeTask={removeTask} editTask={editTask}/>
        </Container>
    );
}

export default Dashboard;