import {call, put, takeLatest} from "redux-saga/effects";
import * as Actions from "./PlaceActions";
import {actions} from "./PlaceReducer";
import GetPlacesApi from "api/PlacesApi";

export function* attemptGetPlaces({payload: {location}}: any): any {
    try {
        const restaurants: any = yield call(GetPlacesApi.attemptGetRestaurants, location);
        yield put(Actions.getPlacesSucceed(restaurants));
    } catch (error) {
        yield put(Actions.getPlacesFailed(error));
    }
}

export function* attemptDeletePlace({payload: {id, location}}: any): any {
    try {
        yield call(GetPlacesApi.attemptDeletePlace, id);
        const restaurants: any = yield call(GetPlacesApi.attemptGetRestaurants, location);
        yield put(Actions.getPlacesSucceed(restaurants));
    } catch (error) {
        yield put(Actions.deletePlaceFailed(error));
    }
}

function* getRestaurantsSaga(): any {
    yield takeLatest(actions.ATTEMPT_GET_PLACES, attemptGetPlaces);
    yield takeLatest(actions.ATTEMPT_DELETE_PLACE, attemptDeletePlace);
}

export default getRestaurantsSaga;
