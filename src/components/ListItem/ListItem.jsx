import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Input from '../Input/Input';

import { ListItemComponent, Task, TaskName, Separator, buttonStyles, customModalStyles } from './styles';

import { editButton, editTask, modalInputPlaceholder, deleteButton } from '../../constants';

function ListItem({ task, handleCheckboxChange, handleDeleteTask, handleEditTask }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInputValue, setModalInputValue] = useState(``);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleModalInputChange = useCallback((event) => {
        setModalInputValue(event.target.value);
    }, []);

    const saveTask = useCallback((uuid, completed, taskName) => {
        handleEditTask(uuid, completed, taskName);
        setModalInputValue(``);
        closeModal();
    }, []);

    return (
        <div>
            <ListItemComponent>
                <Task>
                    <Checkbox completed={task.completed} onChange={() => handleCheckboxChange(task.uuid, task.completed, task.taskName)} />
                    <TaskName>{task.taskName}</TaskName>
                </Task>
                <div>
                    <Button buttonName={editButton} styles={buttonStyles} onClick={openModal} />
                    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customModalStyles} ariaHideApp={false}>
                        <Input
                            inputPlaceholder={modalInputPlaceholder}
                            inputValue={modalInputValue}
                            handleInputChange={handleModalInputChange}
                        />
                        <Button buttonName={editTask} onClick={() => saveTask(task.uuid, task.completed, modalInputValue)} />
                    </Modal>
                    <Separator>/</Separator>
                    <Button buttonName={deleteButton} styles={buttonStyles} onClick={() => handleDeleteTask(task.uuid)} />
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
    handleEditTask: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
    task: null,
};

export default ListItem;
