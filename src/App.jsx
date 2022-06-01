import { useState, useEffect, useCallback } from 'react';

import TasksContext from './context/Tasks';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import AppContainer from './styles';

const apiUrl = `http://localhost:8000/tasks`;

function App() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState(``);

    const fetchData = useCallback(async () => {
        const data = await fetch(apiUrl);
        const json = await data.json();
        setTasks(json);
    }, []);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const createTask = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: tasks.length + 1, taskName: inputValue, completed: false }),
            });
            await response.json();
            fetchData().catch(console.error);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCreateTask = () => {
        createTask();
    };

    return (
        <TasksContext.Provider value={tasks}>
            <AppContainer>
                <Header inputValue={inputValue} handleInputChange={handleInputChange} handleCreateTask={handleCreateTask} />
                <Main />
                <Footer />
            </AppContainer>
        </TasksContext.Provider>
    );
}

export default App;
