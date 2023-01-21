import { endpoint } from "../util/variables";
import axios from "axios";

export function postCart(body, headers) {
    return axios
        .post(`${endpoint}/carrinhos`, body, headers)
        .then((response) => response)
        .catch(({ response }) => {
            return response;
        });
}
