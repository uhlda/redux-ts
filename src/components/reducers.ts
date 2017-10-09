// tslint:disable-next-line:no-any
export default function CounterReduce(state: any, action: any) {
  if (action.type === 'INCREMENT_COUNTER') {
    return state + 1;
  }
  return state;
} 