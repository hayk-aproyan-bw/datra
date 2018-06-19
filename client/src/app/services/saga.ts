import { all } from "redux-saga/effects";
import getRestaurantsSaga from "../modules/places/PlaceSaga";

export default function*(): any {
    yield all([
        getRestaurantsSaga()
    ]);
};
