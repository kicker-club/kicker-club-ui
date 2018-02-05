import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from '../action-creator';

const initialState = Map({
  signUpIsOpened: false,
  signInIsOpened: false,
  rememberMe: false,
  subscribeToNews: false
});

export default handleActions({
  [actions.switchSignUp](state) {
    return state.set('signUpIsOpened', !state.get('signUpIsOpened'))
  },
  [actions.switchSignIn](state) {
    return state.set('signInIsOpened', !state.get('signInIsOpened'))
  },
  [actions.clickRememberMe](state) {
    return state.set('rememberMe', !state.get('rememberMe'))
  },
  [actions.clickSubscribeToNews](state) {
    return state.set('subscribeToNews', !state.get('subscribeToNews'))
  }
}, initialState);