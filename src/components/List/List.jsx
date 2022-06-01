import { useContext } from 'react';

import TasksContext from '../../context/Tasks';

import ListItem from '../ListItem/ListItem';

function List() {
    const tasks = useContext(TasksContext);

    return (
        <div>
            {tasks.map((task) => (
                <ListItem key={task.id} task={task} />
            ))}
        </div>
    );
}

export default List;
