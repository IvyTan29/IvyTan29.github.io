import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';

function App() {
    return (
        <div className="App">
            <Profile name="Ivy" lastname="Tan">
              <h3>This is a profile of a person</h3>
            </Profile>
            <Profile name="Catherine" lastname="Jones" />
        </div>
    );
}

export default App;
