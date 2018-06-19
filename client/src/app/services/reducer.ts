import GetRestaurantsReducer, {IAuthData} from "../modules/auth/AuthReducer";
import {combineReducers} from "redux-immutable";
import {Map} from "immutable";

export interface IMainStore extends Map<string, any> {
    authData: IAuthData;
}

export default combineReducers({
    authData: GetRestaurantsReducer
});
