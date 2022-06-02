import { memo } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';

import { FooterComponent, FooterHeading } from './styles';

import { hideCompleted } from '../../constants';

function Footer({ filterTasks }) {
    return (
        <FooterComponent>
            <FooterHeading>{hideCompleted}</FooterHeading>
            <Checkbox onChange={filterTasks} />
        </FooterComponent>
    );
}

Footer.propTypes = {
    filterTasks: PropTypes.func.isRequired,
};

export default memo(Footer);
