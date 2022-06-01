import PropTypes from 'prop-types';

import InputComponent from './styles';

function Input({ inputPlaceholder, inputValue, handleInputChange }) {
    return <InputComponent placeholder={inputPlaceholder} value={inputValue} onChange={handleInputChange} />;
}

Input.propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};

export default Input;
