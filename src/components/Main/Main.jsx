import ListItem from '../ListItem/ListItem';

import Heading from './styles';

import { tasks } from '../../constants';

function Main() {
    return (
        <main>
            <Heading>{tasks}</Heading>
            <hr />
            <div>
                <ListItem />
            </div>
        </main>
    );
}

export default Main;
