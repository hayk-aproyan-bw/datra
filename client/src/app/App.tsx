import getAppConfigurations from "helpers/app/getAppConfigurations";
import {browserHistory, Router} from "react-router";
import {Provider} from "react-redux";
import * as React from "react";
import "sass/vendor.scss";

export default (): React.ReactElement<any> => {

    const {store, routes} = getAppConfigurations();

    return (
           <Provider store={store}>
            <Router history={browserHistory} routes={routes}/>
           </Provider>
    );
};
