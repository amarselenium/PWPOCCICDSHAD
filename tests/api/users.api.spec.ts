import { test, expect } from '@playwright/test';

const AUTH_TOKEN = 'Bearer 2e13350cf6baa02f79d5c06820828d58b063f08f34495214270a275e81878ebc';

test('get user test', async ({ request }) => {
  const response = await request.get(
    'https://gorest.co.in/public/v2/users',
    {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    }
  );

  const jsonResponseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe('OK');
  expect(jsonResponseBody.length).toBeGreaterThan(0);
  console.log(jsonResponseBody);
});


test('Create user test', async ({ request }) => {
  const requestBody = {
    name: 'John Doe',
    email: `johndoe${Date.now()}@example.com`,
    gender: 'male',
    status: 'active',
  };

  const response = await request.post('https://gorest.co.in/public/v2/users', {
    headers: {
      Authorization: AUTH_TOKEN,
      'Content-Type': 'application/json',
    },
    data: requestBody,
  });

  const jsonResponseBody = await response.json();

  expect(response.status()).toBe(201);
  expect(response.statusText()).toBe('Created');
  expect(jsonResponseBody).toMatchObject(requestBody);
  console.log(jsonResponseBody);
});
