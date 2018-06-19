import { all } from "redux-saga/effects";
import authSaga from "../modules/auth/AuthSaga";

export default function*(): any {
    yield all([
        authSaga()
    ]);
};
