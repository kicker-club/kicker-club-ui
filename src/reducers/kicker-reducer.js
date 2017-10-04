import { Map } from 'immutable';

const initialState = Map({
    score: 0
});

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE':
            // Here we can call the files containing business logic.
            const previousScore = state.get('score');
            return state.set('score', previousScore + 1)
    }

    return state;
}

export default reducer;