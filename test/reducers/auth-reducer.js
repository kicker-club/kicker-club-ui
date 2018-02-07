import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { Map } from 'immutable';
import authReducer from 'reducers/auth-reducer';

const should = chai.should();
chai.use(chaiImmutable);

describe('authReducer', () => {
  describe('sign up', () => {
    function testSignUp(initialValue) {
      const action = {
        type: 'TOGGLE_SIGN_UP_FORM'
      };

      const initialState = Map({
        signUpIsOpened: initialValue
      });

      const newState = authReducer(initialState, action);
      newState.should.equal(Map({
        signUpIsOpened: !initialValue
      }));
    }

    it('should toggle signup to true', () => {
      testSignUp(false);
    });

    it('should toggle signup to false', () => {
      testSignUp(true);
    });
  });

  describe('sign out', () => {
    it('should sign out', () => {
      const history = [];
      const action = {
        type: 'SIGN_OUT',
        payload: history
      };
      const initialState = Map({
        signedIn: true
      });

      const newState = authReducer(initialState, action);

      newState.should.equal(Map({ signedIn: false }));
      history.should.include('/');
    });
  });
});