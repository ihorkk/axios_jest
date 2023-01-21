import { productId } from "../test/store.test";
import * as variable from "../util/variables";
import * as preRequest from "./preRequests";

export const loginBody = {
    email: preRequest.rEmail,
    password: preRequest.rPassword,
};

export const invalidLoginBody = {
    email: preRequest.rInvalidEmail,
    password: preRequest.rInvalidPassword,
};

export const createUserBody = {
    nome: preRequest.rFullName,
    email: preRequest.rEmail,
    password: preRequest.rPassword,
    administrador: variable.administrador,
};

export const createProductBody = {
    nome: preRequest.rProductName,
    preco: preRequest.rProductPrice,
    descricao: preRequest.rProductDescription,
    quantidade: preRequest.rProductQuantity,
};

export const registerCart = () => {
    return {
        produtos: [
            {
                idProduto: `${productId}`,
                quantidade: 1,
            },
        ],
    };
};
