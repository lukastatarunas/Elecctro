import { useContext } from 'react';
import PropTypes from 'prop-types';

import TasksContext from '../../context/Tasks';

import ListItem from '../ListItem/ListItem';

function List({ handleCheckboxChange }) {
    const tasks = useContext(TasksContext);

    return (
        <div>
            {tasks.map((task) => (
                <ListItem key={task.id} task={task} handleCheckboxChange={handleCheckboxChange} />
            ))}
        </div>
    );
}

List.propTypes = {
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default List;
