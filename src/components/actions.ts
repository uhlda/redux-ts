import { Action } from 'redux';

// Actions
export const actionTypes = {
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  DECREMENT_COUNTER: 'DECREMENT_COUNTER'
};

export interface IncrementCounter extends Action {
  type: string;
}

export interface DecrementCounter extends Action {
  type: string;
}

export type CounterActions =
  | IncrementCounter
  | DecrementCounter;

export type Dispatch = (action: Action) => void;

// Action Creators
export function createIncrementAction(): IncrementCounter {
  return {
    type: actionTypes.INCREMENT_COUNTER
  };
}

export function createDecrementAction(): DecrementCounter {
  return {
    type: actionTypes.DECREMENT_COUNTER
  };
}

// const IncrementAction = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };

// const DecrementAction = () => {
//   return {
//     type: 'DECREMENT'
//   };
// };