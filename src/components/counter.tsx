import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, createIncrementAction } from './actions';

interface StateFromProps {
  label: string;
  clickCount: number;
}

interface DispatchFromProps {
  handleClick: () => void;
}

interface Props extends StateFromProps, DispatchFromProps {}

export class Counter extends React.Component<Props, object> {
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
  myData: {
    clickCount: number,
    label: string
  }
};

// tslint:disable-next-line:no-any
const mapStateToProps = (state: State) => ({
  label: state.myData.label,
  clickCount: state.myData.clickCount
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
  handleClick: () => dispatch(createIncrementAction())
});

export default connect<StateFromProps, DispatchFromProps, { label: string }>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
