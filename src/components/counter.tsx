import * as React from 'react';
import { connect, Dispatch, Provider } from 'react-redux';
import { createIncrementAction } from './actions';
import { createStore } from 'redux';
import CounterReduce from './reducers';

interface StateFromProps {
  label?: string;
  clickCount?: number;
}

interface DispatchFromProps {
  handleClick?: () => void;
}

interface Props extends StateFromProps, DispatchFromProps {}

const store = createStore(CounterReduce);
    
export class CounterForm extends React.Component<Props, object> {
  // tslint:disable-next-line:no-any
  constructor(props: Props) {
    super(props);
    this.state = { 
      clickCount: 0,
      label: 'Counter'
     };
  }
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

export type State = {
  clickCount: number,
  label: string
};

const mapStateToProps = (state: State): StateFromProps => ({
  label: state.label,
  clickCount: state.clickCount
});

// tslint:disable:no-any
const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchFromProps => ({
  handleClick: () => dispatch<any>(createIncrementAction())
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
