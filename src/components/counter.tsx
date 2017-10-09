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
  // tslint:disable-next-line:no-any
  constructor(props: any) {
    super(props);
    this.state = { 
      clickCount: 0,
      label: 'Hit Me'
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

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
  handleClick: () => dispatch(createIncrementAction())
});

// tslint:disable-next-line:align
export default connect<StateFromProps, DispatchFromProps, { label: string }>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
