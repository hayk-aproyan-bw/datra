import {createSelector} from "reselect";
import {Map} from "immutable";

const authDataSelector: any = (state: Map<string, any>) => state.get("authData");

const userSelector: any = createSelector(
    authDataSelector, (authData: Map<string, any>) => authData.get("user")
);

export default state => {
    return {
        user: userSelector(state)
    };
};