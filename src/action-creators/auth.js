import { createAction } from 'redux-actions';

export const toggleSignUpForm = createAction('TOGGLE_SIGN_UP_FORM');
export const clickSubscribeToNews = createAction('CLICK_SUBSCRIBE_TO_NEWS');

export const signIn = createAction('SIGN_IN');
export const showSignInForm = createAction('SHOW_SIGN_IN_FORM');
export const hideSignInForm = createAction('HIDE_SIGN_IN_FORM');
export const changeEmail = createAction('CHANGE_EMAIL');
export const changePassword = createAction('CHANGE_PASSWORD');
export const changeRememberMe = createAction('CHANGE_REMEMBER_ME');
export const signOut = createAction('SIGN_OUT');

export const changeRole = createAction('CHANGE_ROLE');

export const changeClubName = createAction('CHANGE_CLUB_NAME');
export const changeClubPassword = createAction('CHANGE_CLUB_PASSWORD');