// tslint:disable-next-line:no-any
function counterReducer(state: any, action: any) {
  if (action.type === 'INCREMENT_COUNTER') {
    return state + 1;
  }
  return state;
} 