import { memo } from 'react';
import PropTypes from 'prop-types';

import CheckboxComponent from './styles';

function Checkbox({ completed, onChange }) {
    return <CheckboxComponent type='checkbox' checked={completed} onChange={onChange} />;
}

Checkbox.propTypes = {
    completed: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
    completed: null,
};

export default memo(Checkbox);
