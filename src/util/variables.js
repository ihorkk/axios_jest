import { rStoreToken } from "../bodies/preRequests";
import { storeToken } from "../test/store.test";

export const endpoint = "https://serverest.dev";
export const headers = {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
};
export const headersAuthorization = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${storeToken}`,
        },
    };
};

export const headersInvalidAuthorization = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${rStoreToken}`,
        },
    };
};
export const administrador = "true";
