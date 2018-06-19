import axios, {AxiosPromise} from "axios";
import params from "configs/params";

export default class GetPlacesApi {

    static attemptGetRestaurants(location: any): AxiosPromise {
        return axios.get(`${params.apiUrl}/api/places?lng=${location.lng}&lat=${location.lat}`);
    }

    static attemptDeletePlace(id: any): AxiosPromise {
        return axios.delete(`${params.apiUrl}/api/places/${id}`);
    }

}
