import PropTypes from 'prop-types';

import InputComponent from './styles';

function Input({ inputPlaceholder }) {
    return <InputComponent placeholder={inputPlaceholder} />;
}

Input.propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
};

export default Input;
