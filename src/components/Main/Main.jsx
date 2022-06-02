import PropTypes from 'prop-types';

import List from '../List/List';

import Heading from './styles';

import { tasks } from '../../constants';

function Main({ handleCheckboxChange, handleDeleteTask, handleEditTask }) {
    return (
        <main>
            <Heading>{tasks}</Heading>
            <hr />
            <List handleCheckboxChange={handleCheckboxChange} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} />
        </main>
    );
}

Main.propTypes = {
    handleCheckboxChange: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handleEditTask: PropTypes.func.isRequired,
};

export default Main;
