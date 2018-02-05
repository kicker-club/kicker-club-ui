import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from '../action-creator';

const initialState = Map({
  signUpIsOpened: false,
  subscribeToNews: true,

  signInIsOpened: false,
  email: '',
  password: '',
  rememberMe: false
});

export default handleActions({
  [actions.toggleSignUpForm](state) {
    return state.set('signUpIsOpened', !state.get('signUpIsOpened'));
  },
  [actions.clickSubscribeToNews](state) {
    return state.set('subscribeToNews', !state.get('subscribeToNews'));
  },

  // Maybe it's neeeded create a separate reducer.
  [actions.signIn](state) {
    const email = state.get('email');
    const password = state.get('password');
    if (email === 'win@win.win' && password === '12345') { // TODO: Stub.
      // Show additional fields.
      console.log('SUCCESS');
    }
    return state.set('signInIsOpened', !state.get('signInIsOpened'));
  },
  [actions.toggleSignInForm](state) {
    return state
      .set('email', '')
      .set('password', '')
      .set('rememberMe', false)
      .set('signInIsOpened', !state.get('signInIsOpened'));
  },
  [actions.changeEmail](state, action) {
    return state.set('email', action.payload);
  },
  [actions.changePassword](state, action) {
    return state.set('password', action.payload);
  },
  [actions.changeRememberMe](state) {
    return state.set('rememberMe', !state.get('rememberMe'))
  }
}, initialState);