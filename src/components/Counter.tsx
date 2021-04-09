import React from 'react';

interface CounterProps {}

interface CounterState {
  count: number
}

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: any) {
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }

    render() {
        return (
              <div>
                <div role="counter">{this.state.count}</div>
                <button role="increment" onClick={() => this.increment()}>Increment</button>
                <button role="decrement" onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter;