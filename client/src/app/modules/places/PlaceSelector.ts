import {createSelector} from "reselect";
import {Map} from "immutable";

const placesDataSelector: any = (state: Map<string, any>) => state.get("placesData");

const restaurantsSelector: any = createSelector(
    placesDataSelector, (placesData: Map<string, any>) => placesData.get("restaurants")
);

export default state => {
    return {
        restaurants: restaurantsSelector(state)
    };
};