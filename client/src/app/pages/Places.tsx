import selector from "../services/selector";
import {connect} from "react-redux";
import * as React from "react";
import StatusBar from "components/StatusBar";
import Map from "components/Map";
import {attemptDeletePlace, attemptGetPlaces} from "../modules/places/PlaceActions";

export class Places extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            markers: [
            ],
            selectedElement: null

        };
    }

    componentWillMount(): void {
        this.props.attemptGetPlaces({lat: 59.334591, lng: 59.334591 });
    }

    componentWillReceiveProps(nextProps: any): void {
        let nextMarkers: any  =  nextProps.restaurants.toJS();
        nextMarkers && this.setState({markers: nextMarkers});
    }

    render(): JSX.Element {
        return (
            <div>
                <StatusBar selectedElement = {this.state.selectedElement}
                           deletePlace = {(id) => this.props.attemptDeleteRestaurant(id)}
                />
                <Map
                    select = {(el) => this.setState({selectedElement: el})}
                    markers ={this.state.markers} />
            </div>
        );
    }
}

const mapStateToProps: any = state => selector(state);

const mapDispatchToProps: any = dispatch => {
    return {
        attemptGetPlaces: (location) => dispatch(attemptGetPlaces(location)),
        attemptDeleteRestaurant: (id) => dispatch(attemptDeletePlace( id, {lat: 59.334591, lng: 59.334591 })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
