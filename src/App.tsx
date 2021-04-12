import React from 'react';
import Counter from './components/Counter';
import logo from './logo.svg';
import './App.css';
import CounterPureFunction from './components/CounterPureFunction';
import CounterWithRedux from './components/CounterWithRedux';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Counter</h2>
                <Counter />
                <h2>Counter with pure function</h2>
                <CounterPureFunction />
                <h2>Counter with redux</h2>
                <CounterWithRedux/>
            </header>
        </div>
    );
}

export default App;
