# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/amedeus.oauth2.spec.ts >> GET -- get location data
- Location: tests/api/amedeus.oauth2.spec.ts:31:5

# Error details

```
Error: apiRequestContext.post: getaddrinfo ENOTFOUND test.api.amadeus.com
Call log:
  - → POST https://test.api.amadeus.com/v1/security/oauth2/token
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 103

```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | 
  5  | let OAUTH_CONFIG = {
  6  |     tokenURL: 'https://test.api.amadeus.com/v1/security/oauth2/token',
  7  |     clientId: process.env.OAUTH_CLIENT_ID!,
  8  |     clientSecret: process.env.OAUTH_CLIENT_SECRET!,
  9  |     grantType: process.env.GRANT_TYPE!
  10 | }
  11 | 
  12 | let accessToken: string;
  13 | 
  14 | test.beforeEach('POST -- generate the access token', async ({ request }) => {
  15 | 
> 16 |     let response = await request.post(OAUTH_CONFIG.tokenURL, {
     |                                  ^ Error: apiRequestContext.post: getaddrinfo ENOTFOUND test.api.amadeus.com
  17 |         form: {
  18 |             grant_type: OAUTH_CONFIG.grantType,
  19 |             client_id: OAUTH_CONFIG.clientId,
  20 |             client_secret: OAUTH_CONFIG.clientSecret
  21 |         }
  22 |     });
  23 | 
  24 |     expect(response.status()).toBe(200);
  25 |     let jsonResponse = await response.json();
  26 |     console.log(jsonResponse);
  27 |     accessToken = jsonResponse.access_token;
  28 | });
  29 | 
  30 | 
  31 | test('GET -- get location data', async ({ request }) => {
  32 | 
  33 |     //https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=MUC&countryCode=DE
  34 |     let baseURL = 'https://test.api.amadeus.com';
  35 |     let endPointURL = '/v1/reference-data/locations';
  36 | 
  37 |     let queryParam = {
  38 |         subType: 'CITY,AIRPORT',
  39 |         keyword: 'MUC',
  40 |         countryCode: 'DE'
  41 |     };
  42 | 
  43 |     let locationResponse = await request.get(`${baseURL}${endPointURL}`, {
  44 |         headers: {
  45 |             Authorization: `Bearer ${accessToken}`
  46 |         },
  47 |         params: queryParam
  48 | 
  49 |     });
  50 | 
  51 |     expect(locationResponse.status()).toBe(200);
  52 |     console.log(await locationResponse.json());
  53 | 
  54 |     let locationJson = await locationResponse.json();
  55 |     console.log(locationJson.meta.count);
  56 | 
  57 |     let location1 = locationJson.data[0];
  58 |     console.log(location1);
  59 | });
  60 | 
  61 | 
  62 | 
  63 | 
```