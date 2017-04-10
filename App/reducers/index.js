import {combineReducers} from 'redux'


// export default combineReducers(Object.assign(
//   recipesReducer,
// ));


export default function(state = [], action) {
  console.log('state in reducer', state);
  console.log('action in reducers', action);

  switch(action.type) {
    case "ADD_NAVIGATOR":
      return Object.assign({}, state, {
        navigator: action.navigator
      })
      break;
    default:
      return state      
  }


}
