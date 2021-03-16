/**
 * To represetn chained operations you need a redux middleware to enhance the dispatch function.
 *
 * In our case, we use redux-thunk. We want to separate the thunks from the action creators,
 * even with the cost of writing extra code. So we define an operation as wrapper over actions.
 *
 * If the operation oly dispatches a single action - doesn't actualy use redux thunk - we forward
 * the action creator function. If the operation uses a thunk, it can dispatch many actions and
 * chain them with promises.
 */
