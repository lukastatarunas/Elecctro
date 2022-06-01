import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

import HeaderComponent from './styles';

import { inputPlaceholder, createButton } from '../../constants';

function Header({ inputValue, handleInputChange, handleCreateTask }) {
    return (
        <HeaderComponent>
            <Input inputPlaceholder={inputPlaceholder} inputValue={inputValue} handleInputChange={handleInputChange} />
            <Button buttonName={createButton} handleCreateTask={handleCreateTask} />
        </HeaderComponent>
    );
}

Header.propTypes = {
    inputValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleCreateTask: PropTypes.func.isRequired,
};

export default Header;
