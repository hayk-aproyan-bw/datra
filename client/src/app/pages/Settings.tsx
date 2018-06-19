import selector from "../services/selector";
import {connect} from "react-redux";
import * as React from "react";
import {attemptGetSettings} from "../modules/settings/SettingsActions";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class Settings extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.props.attemptGetSettings();
    }

    render(): JSX.Element {
        const {settings} = this.props;
        return (
            <div>
                <Row className="mt-4 justify-content-center">
                    {settings && settings.map((item, index) => {
                        return (
                            <Col key={index} md={2} className="text-center" style={{margin: "5px", backgroundColor: item.get("backgroundColor")}}>
                                <h4>{item.get("title")}</h4>
                                <p>{item.get("position")}</p>
                                <select value={item.get("backgroundColor")} onChange={() => null}>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                </select>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        );
    }
}

const mapStateToProps: any = state => selector(state);

const mapDispatchToProps: any = dispatch => {
    return {
        attemptGetSettings: () => dispatch(attemptGetSettings())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
