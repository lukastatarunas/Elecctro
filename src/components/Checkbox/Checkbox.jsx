import PropTypes from 'prop-types';

import CheckboxComponent from './styles';

function Checkbox({ completed, handleCheckboxChange }) {
    return <CheckboxComponent type='checkbox' checked={completed} onChange={handleCheckboxChange} />;
}

Checkbox.propTypes = {
    completed: PropTypes.bool.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
