import { Route, RouteConfig, IndexRoute} from "react-router";
import * as Pages from "../pages";
import * as React from "react";

export default (): RouteConfig => {

    return (
        <Route path="/" component={Pages.Layout}>
            <IndexRoute component={Pages.Registration}/>
            <Route path="settings" component={Pages.Settings} />
        </Route>
    );
};
