import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import FunctionalCounter from './components/FunctionalCounter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import ConditionalComponent from './components/ConditionalComponent';

function App() {
    return (
        <div className="App">
            {/* <Profile name="Ivy" lastname="Tan" /> */}
            {/* <Counter></Counter> */}
            {/* <FunctionalCounter></FunctionalCounter> */}
            {/* <Resume name="Ivy"></Resume> */}
            {/* <FunctionEvent></FunctionEvent> */}
            {/* <ClassEvent></ClassEvent> */}
            <ConditionalComponent></ConditionalComponent>
        </div>
    );
}

export default App;
