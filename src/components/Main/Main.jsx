import List from '../List/List';

import Heading from './styles';

import { tasks } from '../../constants';

function Main() {
    return (
        <main>
            <Heading>{tasks}</Heading>
            <hr />
            <List />
        </main>
    );
}

export default Main;
