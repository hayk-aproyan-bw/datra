import {call, put, takeLatest} from "redux-saga/effects";
import * as Actions from "./SettingsActions";
import {actions} from "./SettingsReducer";
import AuthApi from "api/AuthApi";

export function* attemptGetSettings(): any {
    try {
        const response: any = yield call(AuthApi.attemptGetSettings);
        yield put(Actions.getSettingsSuccess(response.data));
    } catch (error) {
        if (error.response) {
            yield put(Actions.getSettingsFailed(error.response.data.message));
        }
    }
}

function* getSettingsSaga(): any {
    yield takeLatest(actions.ATTEMPT_GET_SETTINGS, attemptGetSettings);
}

export default getSettingsSaga;
