import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

import HeaderComponent from './styles';

function Header({ inputPlaceholder, buttonName }) {
    return (
        <HeaderComponent>
            <Input inputPlaceholder={inputPlaceholder} />
            <Button buttonName={buttonName} />
        </HeaderComponent>
    );
}

Header.propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
};

export default Header;
