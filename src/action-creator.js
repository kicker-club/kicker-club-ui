export function switchSignUp() {
  return {
    type: 'SWITCH_SIGNUP'
    // Here we can send additional metadata to reducers from params.
  };
}

export function switchSignIn() {
  return {
    type: 'SWITCH_SIGNIN'
  };
}

export function clickRememberMe() {
  return {
    type: 'CLICK_REMEMBER_ME'
  };
}

export function clickSubscribeToNews() {
  return {
    type: 'CLICK_SUBSCRIBE_TO_NEWS'
  };
}