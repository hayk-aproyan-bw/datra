import selector from "../services/selector";
import {connect} from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, FormFeedback } from 'reactstrap';
import * as React from "react";
import {isEmail, isEmpty} from "validator";
import {clone} from "lodash";
import {attemptRegistration} from "../modules/auth/AuthActions";
const I18n: any = require("react-i18nify").I18n;

interface IRegistrationState {
    fields?: {
        title: string;
        subTitle: string;
        email: string;
    };
    errors?: {
        email?: string;
        subTitle?: string;
        title?: string;
    };
}

export class Registration extends React.Component<any, IRegistrationState> {
    constructor(props: any) {
        super(props);

        this.state = {
            fields: {
                title: "",
                subTitle: "",
                email: ""
            },
            errors: {
                email: "",
                subTitle: "",
                title: ""
            }
        };
    }

    validate(name: string, value: string): string {
        switch (name) {
            case "email":
                if (isEmpty(value)) {
                    return I18n.t("app.required_error_message", {resource: I18n.t("app.email")});
                } else if (!isEmail(value)) {
                    return I18n.t("app.invalid_error_message", {resource: I18n.t("app.email")});
                } else {
                    return "";
                }
            case "subTitle":
                if (isEmpty(value)) {
                    return I18n.t("app.required_error_message", {resource: I18n.t("app.sub_title")});
                } else {
                    return "";
                }
            case "title":
                if (isEmpty(value)) {
                    return I18n.t("app.required_error_message", {resource: I18n.t("app.title")});
                } else {
                    return "";
                }
        }
    }

    onChange(name: string, value: string): void {
        this.setState({fields: {...this.state.fields, [name]: value}, errors: {}});
    }

    handleSubmit(event: any): void {
        event.preventDefault();
        const {attemptRegistration} = this.props;
        let data: IRegistrationState = clone(this.state.fields);

        let validationErrors: any = {};
        Object.keys(data).map(name => {
            const error: string = this.validate(name, data[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });

        if (Object.keys(validationErrors).length > 0) {
            this.setState({errors: validationErrors});
            return;
        }

        attemptRegistration(data);
    }

    render(): JSX.Element {
        console.log(this.props);

        return (
            <Container>
                <div className={"form-wrapper"}>
                    <Form onSubmit={(event) => this.handleSubmit(event)} method="post">
                        <FormGroup>
                            <Label for="title">{I18n.t("app.title")}</Label>
                            <Input type="text"
                                   invalid={this.state.errors.title}
                                   value={this.state.fields.title}
                                   onChange={(event) => this.onChange(event.target.name, event.target.value)}
                                   name="title" placeholder="Title..." />
                            <FormFeedback invalid={this.state.errors.title}>{this.state.errors.title || ""}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="subTitle">{I18n.t("app.sub_title")}</Label>
                            <Input type="text"
                                   invalid={this.state.errors.subTitle}
                                   value={this.state.fields.subTitle}
                                   onChange={(event) => this.onChange(event.target.name, event.target.value)}
                                   name="subTitle" placeholder="Sub Title..." />
                            <FormFeedback invalid={this.state.errors.subTitle}>{this.state.errors.subTitle || ""}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">{I18n.t("app.email")}</Label>
                            <Input type="email"
                                   invalid={this.state.errors.email}
                                   value={this.state.fields.email}
                                   onChange={(event) => this.onChange(event.target.name, event.target.value)}
                                   name="email" placeholder="Email..." />
                            <FormFeedback invalid={this.state.errors.email}>{this.state.errors.email || ""}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <FormText color="invalid">
                                {this.props.message || ""}
                            </FormText>
                        </FormGroup>

                        <Button type={"submit"}>{I18n.t("app.register")}</Button>
                    </Form>
                </div>
                <Row className="mt-4 justify-content-center">
                    <Col md={4} className="text-center">
                        <h4>{I18n.t("app.feature_one_title")}</h4>
                        <img src="/images/java.png"/>
                    </Col>
                    <Col md={4} className="text-center">
                        <h4>{I18n.t("app.feature_two_title")}</h4>
                        <img src="/images/python.png"/>
                    </Col>
                    <Col md={4} className="text-center">
                        <h4>{I18n.t("app.feature_three_title")}</h4>
                        <img src="/images/spring.png"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps: any = state => selector(state);

const mapDispatchToProps: any = dispatch => {
    return {
        attemptRegistration: data => dispatch(attemptRegistration(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
