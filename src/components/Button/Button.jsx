import PropTypes from 'prop-types';

import ButtonComponent from './styles';

function Button({ buttonName }) {
    return <ButtonComponent type='button'>{buttonName}</ButtonComponent>;
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
};

export default Button;
