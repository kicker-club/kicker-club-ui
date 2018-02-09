import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from 'action-creators';

const initialState = Map({
  signUpIsOpened: false,
  subscribeToNews: true,

  signInIsOpened: false,
  signedIn: false,
  email: '',
  password: '',
  rememberMe: false,

  isPlayerRole: false,

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
    const email = state.get('email');
    const password = state.get('password');
    if (email.length > 0 && password.length > 0) {
      const history = action.payload;
      history.push('/app');
      return state
        .set('signedIn', true)
        .set('signInIsOpened', !state.get('signInIsOpened'));
    }
    return state;
  },
  [actions.toggleSignInFormVisibility](state) {
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
  },
  [actions.signOut](state, action) {
    const history = action.payload;
    history.push('/');
    return state.set('signedIn', false);
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