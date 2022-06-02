import PropTypes from 'prop-types';

import List from '../List/List';

import Heading from './styles';

import { tasks } from '../../constants';

function Main({ handleCheckboxChange }) {
    return (
        <main>
            <Heading>{tasks}</Heading>
            <hr />
            <List handleCheckboxChange={handleCheckboxChange} />
        </main>
    );
}

Main.propTypes = {
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default Main;
