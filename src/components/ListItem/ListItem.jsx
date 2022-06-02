import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

import { ListItemComponent, Task, TaskName, Separator, buttonStyles } from './styles';

import { editButton, deleteButton } from '../../constants';

function ListItem({ task, handleCheckboxChange }) {
    return (
        <div>
            <ListItemComponent>
                <Task>
                    <Checkbox
                        id={task.id}
                        completed={task.completed}
                        taskName={task.taskName}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                    <TaskName>{task.taskName}</TaskName>
                </Task>
                <div>
                    <Button buttonName={editButton} styles={buttonStyles} />
                    <Separator>/</Separator>
                    <Button buttonName={deleteButton} styles={buttonStyles} />
                </div>
            </ListItemComponent>
            <hr />
        </div>
    );
}

ListItem.propTypes = {
    task: PropTypes.object,
    handleCheckboxChange: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
    task: null,
};

export default ListItem;
