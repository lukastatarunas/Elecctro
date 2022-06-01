import { useState, useEffect } from 'react';

import TasksContext from './context/Tasks';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import AppContainer from './styles';

const apiUrl = `https://api.jsonbin.io/b/6297686905f31f68b3b20c79`;

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(apiUrl);
            const json = await data.json();
            setTasks(json);
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <TasksContext.Provider value={tasks}>
            <AppContainer>
                <Header />
                <Main />
                <Footer />
            </AppContainer>
        </TasksContext.Provider>
    );
}

export default App;
