import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from 'action-creators/menu';

const initialState = Map({
  mobileMenuIsOpened: false,
});

export default handleActions({
  [actions.openMobileMenu](state) {
    return state.set('mobileMenuIsOpened', true);
  },
  [actions.hideMobileMenu](state) {
    return state.set('mobileMenuIsOpened', false);
  }
}, initialState);