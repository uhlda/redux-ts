import * as React from 'react';
import { connect, Dispatch, Provider } from 'react-redux';
import { createIncrementAction } from './actions';
import { createStore } from 'redux';
import counterReduce from './reducers';

export interface State {
  clickCount: number;
  label: string;
}

export const InitialState: State = {
  clickCount: 0,
  label: 'One'
};

interface StateFromProps {
  label?: string;
  clickCount?: number;
}

interface DispatchFromProps {
  handleClick?: () => void;
}

interface Props extends StateFromProps, DispatchFromProps {}

const store = createStore(counterReduce);
    
export class CounterForm extends React.Component<Props, object> {
  render() {
    const { label, clickCount, handleClick } = this.props;
    return (
      <div>
        <div onClick={handleClick}>
          {label}
        </div>
        <div>
          Clicks: {clickCount}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateFromProps => {
  return state;
};

// tslint:disable:no-any
const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchFromProps => ({
  handleClick: () => store.dispatch<any>(createIncrementAction())
});

// tslint:disable-next-line:align
const Counter = connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps
)(CounterForm);

export default class CounterApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
} 
