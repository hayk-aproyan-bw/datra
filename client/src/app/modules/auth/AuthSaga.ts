import {call, put, takeLatest} from "redux-saga/effects";
import * as Actions from "./AuthActions";
import {actions} from "./AuthReducer";
import AuthApi from "api/AuthApi";

export function* attemptRegistration({payload: {data}}: any): any {
    try {
        const response: any = yield call(AuthApi.attemptRegistration, data);
        yield put(Actions.registrationSuccess(response));
    } catch (error) {
        if (error.response) {
            yield put(Actions.registrationFailed(error.response.data));
        }
    }
}

function* getRestaurantsSaga(): any {
    yield takeLatest(actions.ATTEMPT_REGISTRATION, attemptRegistration);
}

export default getRestaurantsSaga;
