import { all } from "redux-saga/effects";
import authSaga from "../modules/auth/AuthSaga";
import settingsSaga from "../modules/settings/SettingsSaga";

export default function*(): any {
    yield all([
        authSaga(),
        settingsSaga()
    ]);
};
