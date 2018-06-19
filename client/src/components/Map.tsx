import * as React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import { compose, withProps , withState, withHandlers} from "recompose";
const GoogleMapStyles: any = require("./MapStyle.json");

class Map extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render(): any {
        console.log(this.props.zoom, "zoom");
        console.log(this.props.center, "centerChangeeed");
        return (
            <GoogleMap
                defaultCenter={{ lat: 59.334591, lng: 18.063240 }}
                defaultOptions={{ styles: GoogleMapStyles }}
                zoom={this.props.zoom}
                ref={this.props.onMapMounted}
                onZoomChanged={this.props.onZoomChanged}
                onDragEnd={this.props.onDragEnd}
            >
                {
                    this.props.markers.map((el, index) => {
                        let location = { lng: el.loc[0], lat: el.loc[1] };
                        return (
                            <Marker
                                key = {index} position={location}
                                onClick = {() =>  this.props.select(el)}
                            />
                        );
                    })
                }
            </GoogleMap>);
    }
}
export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withState("zoom", "onZoomChange", 16),
    withState("center", "onCenterChanged"),
    withHandlers(() => {
        const refs: any = {
            map: undefined,
        };

        return {
            onMapMounted: () => ref => {
                refs.map = ref;
            },
            onZoomChanged: ({ onZoomChange }) => () => {
                onZoomChange(refs.map.getZoom());
                console.log(refs.map.getCenter().lat());
                console.log(refs.map.getCenter().lng());
            },
            onDragEnd: ({onCenterChanged}) => () => {
                onCenterChanged(refs.map.getCenter());
                console.log(refs.map.getCenter().lat());
                console.log(refs.map.getCenter().lng());
            }
        };
    }),
    withScriptjs,
    withGoogleMap
)(Map);
