import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { routes } from 'consts';
import * as actions from 'action-creators';

const initialState = Map({
  signUpIsOpened: false,
  subscribeToNews: true,

  signInFormIsShown: false,
  signedIn: false,
  email: '',
  password: '',
  rememberMe: false,

  isPlayerRole: true,

  clubName: '',
  clubPassword: ''
});

export default handleActions({
  [actions.toggleSignUpForm](state) {
    return state.set('signUpIsOpened', !state.get('signUpIsOpened'));
  },
  [actions.clickSubscribeToNews](state) {
    return state.set('subscribeToNews', !state.get('subscribeToNews'));
  },

  // Maybe it's neeeded to create a separate reducer.
  [actions.signIn](state, action) {
    const isPlayerRole = state.get('isPlayerRole');
    const email = state.get('email');
    const password = state.get('password');
    const clubName = state.get('clubName');
    const clubPassword = state.get('clubPassword');

    const canSignIn = isPlayerRole
      ? clubName.length && clubPassword.length
      : email.length && password.length;

    if (canSignIn) {
      const history = action.payload;
      history.push(routes.dashboard);
      return state
        .set('signedIn', true)
        .set('signInFormIsShown', !state.get('signInFormIsShown'));
    }

    return state;
  },
  [actions.showSignInForm](state) {
    return state.set('signInFormIsShown', true);
  },
  [actions.hideSignInForm](state) {
    return cleanSignInData(state);
  },
  [actions.changeEmail](state, action) {
    return state.set('email', action.payload);
  },
  [actions.changePassword](state, action) {
    return state.set('password', action.payload);
  },
  [actions.changeRememberMe](state) {
    return state.set('rememberMe', !state.get('rememberMe'))
  },
  [actions.signOut](state, action) {
    const history = action.payload;
    history.push(routes.root);
    return cleanSignInData(state.set('signedIn', false));
  },

  [actions.changeRole](state) {
    return state.set('isPlayerRole', !state.get('isPlayerRole'));
  },

  [actions.changeClubName](state, action) {
    return state.set('clubName', action.payload);
  },
  [actions.changeClubPassword](state, action) {
    return state.set('clubPassword', action.payload);
  }
}, initialState);


function cleanSignInData(state) {
  return state
      .set('email', '')
      .set('password', '')
      .set('clubName', '')
      .set('clubPassword', '')
      .set('rememberMe', false)
      .set('signInFormIsShown', false);
}