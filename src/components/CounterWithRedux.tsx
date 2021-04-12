import { connect } from 'react-redux';
import { increment, decrement } from "../redux/actions";

const CounterWithRedux = ({ count, increment, decrement } : { count: number, increment: any, decrement: any }) =>  {
    return (
        <div>
            <div role="counter">{ count }</div>
            <button role="increment" onClick={() => increment()}>Increment</button>
            <button role="decrement" onClick={() => decrement()}>Decrement</button>
        </div>
    )
}

interface CounterState {
    counterReducer: {
        count: number;
    }
}

const mapStateToProps = (state: CounterState) => {
    const { counterReducer } = state;
    return { count: counterReducer.count };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(CounterWithRedux);
