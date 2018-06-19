import {actions} from "./PlaceReducer";

export interface IPlaceActions {
    type: string;
    payload?: {
        data?: any,
        responses?: any,
        label?: string;
        latitude?: number;
        longitude?: number;
        countryCode?: string;
        id?: number;
        ids?: Array<number>;
        fields?: any;
        errors?: any;
        message?: { type?: string, message?: string };
    };
}

export function getPlacesSucceed(data: any): IPlaceActions {
    return {type: actions.GET_PLACES_SUCCEED, payload: {data}};
}

export function getPlacesFailed(errors: any): IPlaceActions {
    return {type: actions.GET_PLACES_FAILED, payload: {errors}};
}

export function attemptGetPlaces(location: any): any {
    return {
        type: actions.ATTEMPT_GET_PLACES,
        payload: {location},
        };
    }

export function attemptDeletePlace(id: any, location: any): any {
    return {
        type: actions.ATTEMPT_DELETE_PLACE,
        payload: {id: id, location: location },
    };
}

export function deletePlaceSucceed(): IPlaceActions {
    return {type: actions.DELETE_PLACE_SUCCEED, payload: {}};
}

export function deletePlaceFailed(errors: any): IPlaceActions {
    return {type: actions.DELETE_PLACE_FAILED, payload: {errors}};
}


