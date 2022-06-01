import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

import { ListItemComponent, Task, TaskName, Separator, buttonStyles } from './styles';

import { editButton, deleteButton } from '../../constants';

function ListItem() {
    return (
        <div>
            <ListItemComponent>
                <Task>
                    <Checkbox />
                    <TaskName>Task</TaskName>
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

export default ListItem;
