import PropTypes from 'prop-types';

import CheckboxComponent from './styles';

function Checkbox({ completed, onChange }) {
    return <CheckboxComponent type='checkbox' checked={completed} onChange={onChange} />;
}

Checkbox.propTypes = {
    completed: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
