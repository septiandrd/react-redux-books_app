// state argument is not applicaiton state, only the state
// this reducer is responsible to
export default function(state = null, action) {

  switch(action.type) {
    case 'BOOK_SELECTED' :
      return action.payload;
  }
  return state;
}
