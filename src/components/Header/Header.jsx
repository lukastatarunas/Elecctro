import Input from '../Input/Input';
import Button from '../Button/Button';

import HeaderComponent from './styles';

import { inputPlaceholder, createButton } from '../../constants';

function Header() {
    return (
        <HeaderComponent>
            <Input inputPlaceholder={inputPlaceholder} />
            <Button buttonName={createButton} />
        </HeaderComponent>
    );
}

export default Header;
