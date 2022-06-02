import { memo } from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from './styles';

function Button({ buttonName, styles, onClick }) {
    return (
        <ButtonComponent type='button' style={styles} onClick={onClick}>
            {buttonName}
        </ButtonComponent>
    );
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
    styles: PropTypes.object,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    styles: null,
};

export default memo(Button);
