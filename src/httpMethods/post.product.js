import { endpoint } from "../util/variables";
import axios from "axios";

export function postProduct(body, headers) {
    return axios
        .post(`${endpoint}/produtos`, body, headers)
        .then((response) => response)
        .catch(({ response }) => {
            return response;
        });
}
