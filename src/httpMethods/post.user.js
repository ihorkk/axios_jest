import { endpoint } from "../util/variables";
import axios from "axios";

export function postUser(body, headers) {
    return axios
        .post(`${endpoint}/usuarios`, body, headers)
        .then((response) => response)
        .catch(({ response }) => {
            return response;
        });
}
