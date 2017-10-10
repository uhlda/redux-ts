import { State, InitialState } from './counter';
import { Action } from 'redux';

// tslint:disable-next-line:no-any
export default function counterReduce(state: any = InitialState, action: any) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state.clickCount + 1;
    case 'DECREMENT_COUNTER':
      return state.clickCount - 1;
    default:
      return state;
  }
} 