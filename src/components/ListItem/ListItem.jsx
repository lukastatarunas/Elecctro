import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

import { ListItemComponent, Task, TaskName, Separator, buttonStyles } from './styles';

import { editButton, deleteButton } from '../../constants';

function ListItem({ task, handleCheckboxChange, handleDeleteTask }) {
    return (
        <div>
            <ListItemComponent>
                <Task>
                    <Checkbox completed={task.completed} onChange={() => handleCheckboxChange(task.id, task.completed, task.taskName)} />
                    <TaskName>{task.taskName}</TaskName>
                </Task>
                <div>
                    <Button buttonName={editButton} styles={buttonStyles} />
                    <Separator>/</Separator>
                    <Button buttonName={deleteButton} styles={buttonStyles} onClick={() => handleDeleteTask(task.id)} />
                </div>
            </ListItemComponent>
            <hr />
        </div>
    );
}

ListItem.propTypes = {
    task: PropTypes.object,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
    task: null,
};

export default ListItem;
