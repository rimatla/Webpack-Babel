/**Now we want to run this file in the browser, not on the server. When we use web pack, we will be packaging up everything that this file imports into a single bundle.*/

import C from './constants'
/**naming combined reducers as appReducer*/
import appReducer from './store/reducers'
/**not needed with store.subscribe()*/
//import initialState from './initialState.json'
import { createStore } from 'redux'

/**
 * - createStore() is used to build instances of Redux stores
 * - At minimum, the createStore expects one argument, and that is the REDUCER FUNCTION used by the store.
 * - In ou case the appReducer.
 *
 * - The getState method is used to take a look at our current state
 * - The dispatch method is used to mutate the state
 *
 * */

/**
 * createStore()
 */
//Sending the initial state to the store will set up the store initially with 3 ski days previously saved in the initialState.json
//const store = createStore(appReducer, initialState);

/**
 * getState()
 */
//now the store holds and manages your state.
//console.log('initial state', store.getState());

//now remove initialState parameter
const store = createStore(appReducer);

/**
 * store.subscribe()
 */

/*
- Instead of calling a console log after we've created the store, and then AGAIN after we dispatched the action,
- log to the console the current state of the store every time an action is dispatched.
- store.subscribe() can be used to add callback handlers that are invoked once, for every time actions that are dispatched. */
store.subscribe(() => console.log(store.getState()));


/**
 * store.dispatch()
 */
//The store has another critical function: dispatch. That's used to dispatch actions that mutate the state
store.dispatch({
    //dispatch method expects an action object.
    //Here, calling store.dispatch and sending this action should add a ski day to the state of all ski days
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Minnoqua",
        "date": "2016-10-28",
        "powder": false,
        "backcountry": true
    }
});

store.dispatch({
    type: C.SET_GOAL,
    payload: 3
});

//console.log('next state', store.getState());
