import {
    randomEmail,
    randomFullName,
    randomInvalidEmail,
    randomInvalidPassword,
    randomPassword,
    randomProductDescription,
    randomProductName,
    randomProductPrice,
    randomProductQuantity,
    randomStoreToken,
} from "../util/generator";

export const rEmail = randomEmail();
export const rFullName = randomFullName();
export const rPassword = randomPassword();
export const rProductName = randomProductName();
export const rProductPrice = randomProductPrice();
export const rProductDescription = randomProductDescription();
export const rProductQuantity = randomProductQuantity();
export const rInvalidEmail = randomInvalidEmail();
export const rInvalidPassword = randomInvalidPassword();
export const rStoreToken = randomStoreToken();
