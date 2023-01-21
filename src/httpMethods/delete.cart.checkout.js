import { endpoint } from "../util/variables";
import axios from "axios";

export function deleteCheckout(headers) {
    return axios
        .delete(`${endpoint}/carrinhos/concluir-compra`, headers)
        .then((response) => response)
        .catch(({ response }) => {
            return response;
        });
}
