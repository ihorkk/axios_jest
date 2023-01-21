import { endpoint } from "../util/variables";
import axios from "axios";

export function postLogin(body, headers) {
    return axios
        .post(`${endpoint}/login`, body, headers)
        .then((response) => response)
        .catch(({ response }) => {
            return response;
        });
}
