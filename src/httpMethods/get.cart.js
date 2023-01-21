import { endpoint } from "../util/variables";
import axios from "axios";

export function getCart(headers) {
    return axios
        .get(`${endpoint}/carrinhos`, headers)
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            return error;
        });
}
