import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

import { ListItemComponent, Task, TaskName, Separator, buttonStyles } from './styles';

import { editButton, deleteButton } from '../../constants';

function ListItem({ task }) {
    const handleCheckboxChange = () => {};

    return (
        <div>
            <ListItemComponent>
                <Task>
                    <Checkbox completed={task.completed} handleCheckboxChange={handleCheckboxChange} />
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
};

ListItem.defaultProps = {
    task: null,
};

export default ListItem;
