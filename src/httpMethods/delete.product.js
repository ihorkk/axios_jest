import { endpoint } from "../util/variables";
import axios from "axios";
import { productId } from "../test/store.test";

export function deleteProduct(headers) {
    return axios
        .delete(`${endpoint}/produtos/${productId}`, headers)
        .then((response) => response)
        .catch(({ response }) => {
            return response;
        });
}
