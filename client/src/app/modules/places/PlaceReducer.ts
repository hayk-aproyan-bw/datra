import {IPlaceActions} from "./PlaceActions";
import {fromJS, List, Map} from "immutable";

interface IPlaceActionsTypes {

    ATTEMPT_GET_PLACES: string;
    GET_PLACES_SUCCEED: string;
    GET_PLACES_FAILED: string;

    ATTEMPT_DELETE_PLACE: string;
    DELETE_PLACE_SUCCEED: string;
    DELETE_PLACE_FAILED: string;

}

export const actions: IPlaceActionsTypes = {
    ATTEMPT_GET_PLACES: "ATTEMPT_GET_PLACES",
    GET_PLACES_SUCCEED: "GET_PLACES_SUCCEED",
    GET_PLACES_FAILED: "GET_PLACES_FAILED",

    ATTEMPT_DELETE_PLACE: "ATTEMPT_DELETE_PLACE",
    DELETE_PLACE_SUCCEED: "DELETE_PLACE_SUCCEED",
    DELETE_PLACE_FAILED: "DELETE_PLACE_FAILED",
};

export interface IPlacesData extends Map<string, any> {
    errors: any;
    restaurants: any;
}

const defaultState: IPlacesData = fromJS({
    restaurants: List(),
    errors: {},
});

export default (state: IPlacesData = defaultState, {type, payload}: IPlaceActions): IPlacesData => {
    switch (type) {
        case actions.GET_PLACES_SUCCEED:
            console.log(payload.data, "reducer");
            return <IPlacesData>state
                .set("restaurants", fromJS(payload.data.data));

        case actions.GET_PLACES_FAILED:
            return <IPlacesData>state
                .set("errors", Map(payload.errors || {}));

        default:
            return state;
    }
};
