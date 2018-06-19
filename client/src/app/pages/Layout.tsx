import selector from "../services/selector";
import {connect} from "react-redux";
import * as React from "react";
import NavBar from "components/NavBar";

export class Layout extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        const {children} = this.props;

        return (
            <div>
                <NavBar />
                {children}
            </div>
        );
    }
}

const mapStateToProps: any = state => selector(state);

const mapDispatchToProps: any = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
