import selector from "../services/selector";
import {connect} from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import * as React from "react";
import {isEmail, isEmpty} from "validator";
import {clone} from "lodash";
import {attemptRegistration} from "../modules/auth/AuthActions";

interface IRegistrationState {
    fields?: {
        title: string;
        subTitle: string;
        email: string;
    },
    errors?: {
        email: string;
    }
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
                email: ""
            }
        }
    }

    validate(name: string, value: string): string {
        switch (name) {
            case "email":
                if (isEmpty(value)) {
                    return "Email is Required";
                } else if (!isEmail(value)) {
                    return "Invalid Email";
                } else {
                    return "";
                }
        }
    }

    onChange(name: string, value: string): void {
        this.setState({fields: {...this.state.fields, [name]: value}});
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

        return (
            <Container>
                <div className={"form-wrapper"}>
                    <Form onSubmit={(event) => this.handleSubmit(event)} method="post">
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text"
                                   value={this.state.fields.title}
                                   onChange={(event) => this.onChange(event.target.name, event.target.value)}
                                   name="title" placeholder="Title..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subTitle">Subtitle</Label>
                            <Input type="text"
                                   value={this.state.fields.subTitle}
                                   onChange={(event) => this.onChange(event.target.name, event.target.value)}
                                   name="subTitle" placeholder="Sub Title..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email"
                                   value={this.state.fields.email}
                                   onChange={(event) => this.onChange(event.target.name, event.target.value)}
                                   name="email" placeholder="Email..." />
                        </FormGroup>
                        <Button type={"submit"}>Submit</Button>
                    </Form>
                </div>
                <Row className="mt-4 justify-content-center">
                    <Col md={4} className="text-center">
                        <h4>title feature one</h4>
                        <img src="/images/1.png"/>
                    </Col>
                    <Col md={4} className="text-center">
                        <h4>title feature two</h4>
                        <img src="/images/2.png"/>
                    </Col>
                    <Col md={4} className="text-center">
                        <h4>title feature three</h4>
                        <img src="/images/3.png"/>
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
