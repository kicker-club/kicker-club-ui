import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { Map } from 'immutable';
import signUpReducer from './../../src/reducers/signup-reducer';

const should = chai.should();
chai.use(chaiImmutable);

describe('singUpReducer', () => {
  const action = {
    type: 'SWITCH_SIGNUP'
  };

  it('should switch signup to true', () => {
    const initialState = Map({
      signUpIsOpened: false
    });

    const newState = signUpReducer(initialState, action);
    newState.should.equal(Map({
      signUpIsOpened: true
    }));
  });

  it('should switch signup to false', () => {
    const initialState = Map({
      signUpIsOpened: true
    });

    const newState = signUpReducer(initialState, action);
    newState.should.equal(Map({
      signUpIsOpened: false
    }));
  });
});