import GetRestaurantsReducer, {IPlacesData} from "../modules/places/PlaceReducer";
import {combineReducers} from "redux-immutable";
import {Map} from "immutable";

export interface IMainStore extends Map<string, any> {
    placesData: IPlacesData;
}

export default combineReducers({
    placesData: GetRestaurantsReducer
});
