import axios, {AxiosPromise} from "axios";
import params from "configs/params";

export default class AuthApi {

    static attemptRegistration = (data: any): AxiosPromise => {
        return axios.request({
            method: "POST",
            url: `${params.apiUrl}/api/auth/signup`,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
            data: data
        });
    }

    static attemptGetSettings = (): AxiosPromise => {
        let token: string = localStorage.getItem("access_token");
        return axios.request({
            method: "GET",
            url: `${params.apiUrl}/api/settings`,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
    }
}
