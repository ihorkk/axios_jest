import * as body from "../bodies/storeBodies";
import * as variable from "../util/variables";
import { postLogin } from "../httpMethods/post.login";
import { postUser } from "../httpMethods/post.user";
import { postProduct } from "../httpMethods/post.product";
import { deleteProduct } from "../httpMethods/delete.product";
import { getCart } from "../httpMethods/get.cart";
import { deleteCheckout } from "../httpMethods/delete.cart.checkout";
import { postCart } from "../httpMethods/post.cart";

export let storeToken;
export let storeId;
export let productId;
export let cartId;

// Create user (positive)
describe("Create user", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postUser(body.createUserBody, variable.headers);
        console.log("Response is:", storeResponse.data);
    });

    afterAll(async () => {
        storeId = storeResponse.data._id;
        console.log("Response ID is:", storeId);
    });
    test("Status code is 201", async () => {
        await expect(storeResponse.status).toEqual(201);
    });

    test("Status text is Created", async () => {
        await expect(storeResponse.statusText).toEqual("Created");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Cadastro realizado com sucesso"
        );
    });

    test("Verify type of ID parameter", async () => {
        await expect(typeof storeResponse.data._id).toBe("string");
    });
});

// Create user (negative)
describe("Create user with existing email (negative)", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postUser(body.createUserBody, variable.headers);
        console.log("Response is:", storeResponse.data);
    });

    test("Status code is 400", async () => {
        await expect(storeResponse.status).toEqual(400);
    });

    test("Status text is Bad Request", async () => {
        await expect(storeResponse.statusText).toEqual("Bad Request");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Este email já está sendo usado"
        );
    });
});

// Login (positive)
describe("Login with valid credentials", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postLogin(body.loginBody, variable.headers);
        console.log("Response is:", storeResponse.data);
    });

    afterAll(async () => {
        storeToken = storeResponse.data.authorization;
        console.log("Response token is:", storeToken);
    });
    test("Status code is 200", async () => {
        await expect(storeResponse.status).toEqual(200);
    });

    test("Status text is OK", async () => {
        await expect(storeResponse.statusText).toEqual("OK");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Login realizado com sucesso"
        );
    });

    test("Verify type of Authorization parameter", async () => {
        await expect(typeof storeResponse.data.authorization).toBe("string");
    });
});

// Login (negative)
describe("Login with invalid credentials (negative)", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postLogin(
            body.invalidLoginBody,
            variable.headers
        );
        console.log("Response is:", storeResponse.data);
    });

    test("Status code is 401", async () => {
        await expect(storeResponse.status).toEqual(401);
    });

    test("Status text is Unauthorized", async () => {
        await expect(storeResponse.statusText).toEqual("Unauthorized");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Email e/ou senha inválidos"
        );
    });
});

// Create product (positive)
describe("Create product", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postProduct(
            body.createProductBody,
            variable.headersAuthorization()
        );
        console.log("Response is:", storeResponse.data);
    });

    afterAll(async () => {
        productId = storeResponse.data._id;
        console.log("Response ID is:", productId);
    });
    test("Status code is 201", async () => {
        await expect(storeResponse.status).toEqual(201);
    });

    test("Status text is Created", async () => {
        await expect(storeResponse.statusText).toEqual("Created");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Cadastro realizado com sucesso"
        );
    });

    test("Verify type of ID parameter", async () => {
        await expect(typeof storeResponse.data._id).toBe("string");
    });
});

// Create product with existing name (negative)
describe("Create product with existing name (negative)", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postProduct(
            body.createProductBody,
            variable.headersAuthorization()
        );
        console.log("Response is:", storeResponse.data);
    });

    test("Status code is 400", async () => {
        await expect(storeResponse.status).toEqual(400);
    });

    test("Status text is Bad Request", async () => {
        await expect(storeResponse.statusText).toEqual("Bad Request");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Já existe produto com esse nome"
        );
    });
});

// Delete product by ID (positive)
describe("Delete product by ID", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await deleteProduct(variable.headersAuthorization());
        console.log("Response is:", storeResponse.data);
    });
    test("Status code is 200", async () => {
        await expect(storeResponse.status).toEqual(200);
    });

    test("Status text is OK", async () => {
        await expect(storeResponse.statusText).toEqual("OK");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Registro excluído com sucesso"
        );
    });
});

// Delete product by ID (negative)
describe("Delete product by ID using invalid token (negative)", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await deleteProduct(
            variable.headersInvalidAuthorization()
        );
        console.log("Response is:", storeResponse.data);
    });
    test("Status code is 401", async () => {
        await expect(storeResponse.status).toEqual(401);
    });

    test("Status text is Unauthorized", async () => {
        await expect(storeResponse.statusText).toEqual("Unauthorized");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais"
        );
    });
});

// Get cart (positive)
describe("Get cart", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await getCart(variable.headers);
        console.log("Response is:", storeResponse.data);
    });

    test("Status code is 200", async () => {
        await expect(storeResponse.status).toEqual(200);
    });

    test("Status text is OK", async () => {
        await expect(storeResponse.statusText).toEqual("OK");
    });

    test("Verify type of quantidade parameter", async () => {
        await expect(typeof storeResponse.data.quantidade).toBe("number");
    });

    test("Verify type of carrinhos parameter", async () => {
        await expect(typeof storeResponse.data.carrinhos).toBe("object");
    });
});

// Checkout cart (positive)
describe("Checkout with empty cart", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await deleteCheckout(variable.headersAuthorization());
        console.log("Response is:", storeResponse.data);
    });
    test("Status code is 200", async () => {
        await expect(storeResponse.status).toEqual(200);
    });

    test("Status text is OK", async () => {
        await expect(storeResponse.statusText).toEqual("OK");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Não foi encontrado carrinho para esse usuário"
        );
    });
});

// Checkout cart (negative)
describe("Checkout cart using invalid token (negative)", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await deleteCheckout(
            variable.headersInvalidAuthorization()
        );
        console.log("Response is:", storeResponse.data);
    });
    test("Status code is 401", async () => {
        await expect(storeResponse.status).toEqual(401);
    });

    test("Status text is Unauthorized", async () => {
        await expect(storeResponse.statusText).toEqual("Unauthorized");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais"
        );
    });
});

// Create product (positive)
describe("Create product", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postProduct(
            body.createProductBody,
            variable.headersAuthorization()
        );
        console.log("Response is:", storeResponse.data);
    });

    afterAll(async () => {
        productId = storeResponse.data._id;
        console.log("Response ID is:", productId);
    });
    test("Status code is 201", async () => {
        await expect(storeResponse.status).toEqual(201);
    });

    test("Status text is Created", async () => {
        await expect(storeResponse.statusText).toEqual("Created");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Cadastro realizado com sucesso"
        );
    });

    test("Verify type of ID parameter", async () => {
        await expect(typeof storeResponse.data._id).toBe("string");
    });
});

// Register cart (positive)
describe("Register cart", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postCart(
            body.registerCart(),
            variable.headersAuthorization()
        );
        console.log("Response is:", storeResponse.data);
    });

    afterAll(async () => {
        cartId = storeResponse.data._id;
        console.log("Response ID is:", cartId);
    });

    test("Status code is 201", async () => {
        await expect(storeResponse.status).toEqual(201);
    });

    test("Status text is Created", async () => {
        await expect(storeResponse.statusText).toEqual("Created");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Cadastro realizado com sucesso"
        );
    });

    test("Verify type of ID parameter", async () => {
        await expect(typeof storeResponse.data._id).toBe("string");
    });
});

// Register cart (negative)
describe("Register cart using invalid token", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await postCart(
            body.registerCart(),
            variable.headersInvalidAuthorization()
        );
        console.log("Response is:", storeResponse.data);
    });

    test("Status code is 401", async () => {
        await expect(storeResponse.status).toEqual(401);
    });

    test("Status text is Unauthorized", async () => {
        await expect(storeResponse.statusText).toEqual("Unauthorized");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais"
        );
    });
});

// Checkout cart (positive)
describe("Checkout cart with item", () => {
    let storeResponse;

    beforeAll(async () => {
        storeResponse = await deleteCheckout(variable.headersAuthorization());
        console.log("Response is:", storeResponse.data);
    });
    test("Status code is 200", async () => {
        await expect(storeResponse.status).toEqual(200);
    });

    test("Status text is OK", async () => {
        await expect(storeResponse.statusText).toEqual("OK");
    });

    test("Verify response message", async () => {
        await expect(storeResponse.data.message).toEqual(
            "Registro excluído com sucesso"
        );
    });
});
