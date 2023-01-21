import Chance from "chance";
const chance = new Chance();

export function randomFullName() {
    return chance.name({ nationality: "it" });
}

export function randomEmail() {
    return chance.email({ domain: "kenbi.com" });
}

export function randomPassword() {
    return chance.string({ length: 10 });
}

export function randomProductName() {
    return chance.animal({ type: "zoo" });
}

export function randomProductPrice() {
    return chance.integer({ min: 100, max: 800 });
}

export function randomProductDescription() {
    return chance.sentence({ words: 3 });
}

export function randomProductQuantity() {
    return chance.integer({ min: 1, max: 10 });
}

export function randomInvalidEmail() {
    return chance.email({ domain: "kenbi.com" });
}

export function randomInvalidPassword() {
    return chance.string({ length: 8 });
}

export function randomStoreToken() {
    return chance.string({ length: 100 });
}
