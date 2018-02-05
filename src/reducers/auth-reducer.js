import { Map } from 'immutable';

const initialState = Map({
  signUpIsOpened: false,
  signInIsOpened: false,
  rememberMe: false,
  subscribeToNews: false
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    // Here we can call the files containing business logic.
    case 'SWITCH_SIGNUP':
      const signUpIsOpened = state.get('signUpIsOpened');
      return state.set('signUpIsOpened', !signUpIsOpened)
    case 'SWITCH_SIGNIN':
      const signInIsOpened = state.get('signInIsOpened');
      return state.set('signInIsOpened', !signInIsOpened)
    case 'CLICK_REMEMBER_ME':
      const rememberMe = state.get('rememberMe');
      return state.set('rememberMe', !rememberMe);
    case 'CLICK_SUBSCRIBE_TO_NEWS':
      const subscribeToNews = state.get('subscribeToNews');
      return state.set('subscribeToNews', !subscribeToNews);
  }

  return state;
}

export default authReducer;