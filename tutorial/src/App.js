import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';

function App() {
    return (
        <div className="App">
            {/* <Profile name="Ivy" lastname="Tan" /> */}
            {/* <Counter></Counter> */}
            {/* <Resume name="Ivy"></Resume> */}
            <FunctionEvent>
                
            </FunctionEvent>
        </div>
    );
}

export default App;
