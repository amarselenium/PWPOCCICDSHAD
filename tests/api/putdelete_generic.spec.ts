import { test, expect } from "../../src/fixtures/Apifixtures";

// Get API token
const TOKEN = process.env.API_KEY;

const AUTHORIZATION = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function createUser(apiHelper: any) {
    const requestBody = {
        name: 'John Doe',
        email: `johndoe${Date.now()}@example.com`,
        gender: 'male',
        status: 'active',
    };

    const response = await apiHelper.post('/public/v2/users', requestBody, AUTHORIZATION.headers);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(requestBody.name);
    console.log('POST Response:', response.body);
    return response.body;
}

test.describe('User API Tests', () => {
    test('create and update user', async ({ apiHelper }) => {
        const requestUBody = {
            name: 'Jane Doe',
            email: `janedoe${Date.now()}@example.com`,
            gender: 'female',
            status: 'active',
        };

        const userResponse = await createUser(apiHelper);
        console.log(userResponse.id);
        const updatedResponse = await apiHelper.put(`/public/v2/users/${userResponse.id}`, requestUBody, AUTHORIZATION.headers);
        const fetchedResponse = await apiHelper.get(`/public/v2/users/${userResponse.id}`, AUTHORIZATION.headers);

       // expect(updatedResponse.status).toBe(200);
        expect(updatedResponse.body.gender).toBe(requestUBody.gender);
        //expect(fetchedResponse.status).toBe(200);
        console.log('PUT Response:', updatedResponse.body);
    });
});    