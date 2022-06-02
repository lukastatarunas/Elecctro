import { useContext } from 'react';
import PropTypes from 'prop-types';

import TasksContext from '../../context/Tasks';

import ListItem from '../ListItem/ListItem';

function List({ handleCheckboxChange, handleDeleteTask, handleEditTask }) {
    const tasks = useContext(TasksContext);

    return (
        <div>
            {tasks.map((task) => (
                <ListItem
                    key={task.uuid}
                    task={task}
                    handleCheckboxChange={handleCheckboxChange}
                    handleDeleteTask={handleDeleteTask}
                    handleEditTask={handleEditTask}
                />
            ))}
        </div>
    );
}

List.propTypes = {
    handleCheckboxChange: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handleEditTask: PropTypes.func.isRequired,
};

export default List;
