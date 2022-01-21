// Compontents import
import NavBar from './components/NavBar';
import EventContainer from './feature/event/EventContainer';

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <main>
                <EventContainer />
            </main>
        </div>
    );
}

export default App;
