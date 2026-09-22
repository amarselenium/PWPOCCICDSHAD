import { test, expect } from "../../src/fixtures/Apifixtures";

// Get API token
const TOKEN = process.env.API_KEY;

const AUTHORIZATION = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

// GET call
test.describe("GET API Tests", () => {
    test("get users list", async ({ apiHelper }) => {
        const response = await apiHelper.get(
            "/public/v2/users",
            AUTHORIZATION.headers
        );

        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK");

        const jsonResponseBody = await response.json();

        expect(jsonResponseBody.length).toBeGreaterThan(0);

        console.log(jsonResponseBody);
    });
});

// POST + PUT
test.describe("User API Tests", () => {

    test("create and update user", async ({ apiHelper }) => {

        // --------------------
        // POST - Create User
        // --------------------
        const requestBody = {
            name: "John Doe",
            email: `johndoe${Date.now()}@example.com`,
            gender: "male",
            status: "active",
        };

        const postResponse = await apiHelper.post(
            "/public/v2/users",
            requestBody,
            AUTHORIZATION.headers
        );

        expect(postResponse.status).toBe(201);
        expect(postResponse.body.name).toBe(requestBody.name);

        console.log("POST Response:", postResponse.body);

        // Capture ID from POST response
        const responseBodyId = postResponse.body.id;

        console.log("Created User ID:", responseBodyId);


        // --------------------
        // PUT - Update User
        // --------------------
        const updateRequestBody = {
            name: "John Doe Updated",
            email: `johndoeupdated${Date.now()}@example.com`,
        };

        const putResponse = await apiHelper.put(
            `/public/v2/users/${responseBodyId}`,
            updateRequestBody,
            AUTHORIZATION.headers
        );

        expect(putResponse.status).toBe(200);
        expect(putResponse.body.name).toBe(updateRequestBody.name);

        console.log("PUT Response:", putResponse.body);
    });
});