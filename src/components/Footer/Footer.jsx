import Checkbox from '../Checkbox/Checkbox';

import { FooterComponent, FooterHeading } from './styles';

import { hideCompleted } from '../../constants';

function Footer() {
    return (
        <FooterComponent>
            <FooterHeading>{hideCompleted}</FooterHeading>
            <Checkbox />
        </FooterComponent>
    );
}

export default Footer;
