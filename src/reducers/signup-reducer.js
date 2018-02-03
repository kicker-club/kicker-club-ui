import { Map } from 'immutable';

const initialState = Map({
  signUpIsOpened: false
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_SIGNUP':
      // Here we can call the files containing business logic.
      const signUpIsOpened = state.get('signUpIsOpened');
      return state.set('signUpIsOpened', !signUpIsOpened)
  }

  return state;
}

export default signUpReducer;