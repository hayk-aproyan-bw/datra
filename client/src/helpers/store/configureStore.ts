import createSagaMiddleware, {SagaMiddleware} from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import {Store} from "react-redux";
import {fromJS} from "immutable";
import {throttle} from "lodash";

export default (rootReducer: any, rootSaga: any): Store<any> => {

    let store: Store<any>;

    const initialState: any = fromJS({});

    const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware<any>();

    store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    return store;
};
