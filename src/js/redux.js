import {
    // applyMiddleware, 
    combineReducers,
    createStore
} from 'redux';
import { data } from './core/initialState';

// actions.js
export const activateGeod = geod => ({
    type: 'ACTIVATE_GEOD',
    geod,
});

export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
});
export const changeView = view => ({
    type: 'CHANGE_VIEW',
    view,
});

// reducers.js
export const geod = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_GEOD':
            return action.geod;
        case 'CLOSE_GEOD':
            return {};
        default:
            return state;
    }
};
// export const currentDash = (state = {}, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };
// export const currentView = (state = {}, action) => {
//     switch (action.type) {
//         case 'CHANGE_VIEW':
//             return action.view;
//         default:
//             return state;
//     }
// };

export const reducers = combineReducers({
    // currentDash,
    // currentView,
    geod
});

// store.js
export function configureStore(initialState = data) {
    const store = createStore(reducers, initialState);
    return store;
}


export const store = configureStore();
