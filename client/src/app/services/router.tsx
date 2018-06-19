import { Route, RouteConfig} from "react-router";
import * as Pages from "../pages";
import * as React from "react";

export default (): RouteConfig => {

    return (
        <Route path="/" component={Pages.places} />
    );
};
