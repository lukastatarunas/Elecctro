import { useState, useEffect, useCallback } from 'react';

import TasksContext from './context/Tasks';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import AppContainer from './styles';

import { httpHeaders } from './constants';

const apiUrl = `http://localhost:8000/tasks`;

function App() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState(``);
    const [hideCompleted, setHideCompleted] = useState(false);

    const fetchData = useCallback(async () => {
        const data = await fetch(apiUrl);
        const json = await data.json();
        setTasks(json);
    }, []);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);

    const handleInputChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, []);

    const createTask = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: httpHeaders,
                body: JSON.stringify({ id: tasks.length + 1, taskName: inputValue, completed: false }),
            });
            await response.json();
            fetchData().catch(console.error);
            setInputValue(``);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleTask = useCallback(async (id, completed, taskName) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: httpHeaders,
                body: JSON.stringify({ id, taskName, completed: !completed }),
            });
            await response.json();
            fetchData().catch(console.error);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const deleteTask = useCallback(async (id) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
                headers: httpHeaders,
            });
            await response.json();
            fetchData().catch(console.error);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleCreateTask = () => {
        createTask();
    };

    const handleCheckboxChange = useCallback((id, completed, taskName) => {
        toggleTask(id, completed, taskName);
    }, []);

    const handleDeleteTask = useCallback((id) => {
        deleteTask(id);
    }, []);

    const filterTasks = () => {
        if (hideCompleted) {
            fetchData().catch(console.error);
        } else {
            setTasks(tasks.filter((task) => !task.completed));
            setHideCompleted(!hideCompleted);
        }
    };

    return (
        <TasksContext.Provider value={tasks}>
            <AppContainer>
                <Header inputValue={inputValue} handleInputChange={handleInputChange} handleCreateTask={handleCreateTask} />
                <Main handleCheckboxChange={handleCheckboxChange} handleDeleteTask={handleDeleteTask} />
                <Footer filterTasks={filterTasks} />
            </AppContainer>
        </TasksContext.Provider>
    );
}

export default App;
