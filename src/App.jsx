import Header from './components/Header/Header';

import AppContainer from './styles';

import { inputPlaceholder, buttonName } from './constants';

function App() {
    return (
        <AppContainer>
            <Header inputPlaceholder={inputPlaceholder} buttonName={buttonName} />
        </AppContainer>
    );
}

export default App;
