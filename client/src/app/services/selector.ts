import GetRestaurantsSelector from "../modules/places/PlaceSelector";

export default (state, all = true, modules = []) => {
    if (all) {
        return {
            ...GetRestaurantsSelector(state),
        };
    }

    let stateInProps: any = {};

    if (modules.includes("places")) {
        stateInProps = Object.assign({}, stateInProps, {...GetRestaurantsSelector(state)});
    }

    return stateInProps;
};
