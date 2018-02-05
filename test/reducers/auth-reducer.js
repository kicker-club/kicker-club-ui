import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { Map } from 'immutable';
import authReducer from 'reducers/auth-reducer';

const should = chai.should();
chai.use(chaiImmutable);

describe('authReducer', () => {
  const action = {
    type: 'TOGGLE_SIGN_UP_FORM'
  };

  it('should switch signup to true', () => {
    const initialState = Map({
      signUpIsOpened: false
    });

    const newState = authReducer(initialState, action);
    newState.should.equal(Map({
      signUpIsOpened: true
    }));
  });

  it('should switch signup to false', () => {
    const initialState = Map({
      signUpIsOpened: true
    });

    const newState = authReducer(initialState, action);
    newState.should.equal(Map({
      signUpIsOpened: false
    }));
  });
});