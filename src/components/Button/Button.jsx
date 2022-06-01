import PropTypes from 'prop-types';

import ButtonComponent from './styles';

function Button({ buttonName, styles }) {
    return (
        <ButtonComponent type='button' style={styles}>
            {buttonName}
        </ButtonComponent>
    );
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

Button.defaultProps = {
    styles: null,
};

export default Button;
