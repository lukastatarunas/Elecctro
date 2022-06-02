import PropTypes from 'prop-types';

import CheckboxComponent from './styles';

function Checkbox({ id, completed, taskName, handleCheckboxChange }) {
    return <CheckboxComponent type='checkbox' checked={completed} onChange={() => handleCheckboxChange(id, completed, taskName)} />;
}

Checkbox.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    taskName: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
