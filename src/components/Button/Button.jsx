import PropTypes from 'prop-types';

import ButtonComponent from './styles';

function Button({ buttonName, styles, handleCreateTask }) {
    return (
        <ButtonComponent type='button' style={styles} onClick={handleCreateTask}>
            {buttonName}
        </ButtonComponent>
    );
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
    styles: PropTypes.object,
    handleCreateTask: PropTypes.func.isRequired,
};

Button.defaultProps = {
    styles: null,
};

export default Button;
