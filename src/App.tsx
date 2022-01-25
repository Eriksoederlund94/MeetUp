// Compontents import
import NavBar from './components/NavBar';
import EventContainer from './feature/event/EventContainer';

// Global Styles
import GlobalStyle from './GlobalStyles';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <header>
                <NavBar title={'MeetUp'} />
            </header>
            <main>
                <EventContainer />
            </main>
        </div>
    );
}

export default App;
