import { test, expect } from "../../src/fixtures/Apifixtures";

// Get API token
const TOKEN = process.env.API_KEY;

const AUTHORIZATION = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Generic postcall for creating a user

async function createUser(apiHelper: any)
{
   let requestBody = {
        name: 'John Doe',
        email: `johndoe${Date.now()}@example.com`,
        gender: 'male',
        status: 'active',
    };

    const response = await apiHelper.post(
        '/public/v2/users',
        requestBody,
        AUTHORIZATION.headers);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(requestBody.name);

        console.log('POST Response:', response.body);
}



// POST + DELETE
test.describe('User API Tests', () => {

    test('create and delete user', async ({ apiHelper }) => {

        // --------------------
        // POST - Create User
        // --------------------
        const requestBody = {
            name: 'Jane Doe',
            email: `janedoe${Date.now()}@example.com`,
            gender: 'female',
            status: 'active',
        };

        const postResponse = await apiHelper.post(
            '/public/v2/users',
            requestBody,
            AUTHORIZATION.headers
        );

        expect(postResponse.status).toBe(201);
        expect(postResponse.body.name).toBe(requestBody.name);

        console.log('POST Response:', postResponse.body);

        // Capture ID from POST response
        const responseBodyId = postResponse.body.id;

        console.log('Created User ID:', responseBodyId);

        // --------------------
        // DELETE - Delete User
        // --------------------
        const deleteResponse = await apiHelper.delete(
            `/public/v2/users/${responseBodyId}`,
            AUTHORIZATION.headers
        );

        expect(deleteResponse.status).toBe(204);

        console.log('DELETE Response Status:', deleteResponse.status);
    });
});