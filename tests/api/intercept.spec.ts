import {test, expect} from '@playwright/test';

test('Intercept API Requests', async ({ page }) => {

   await page.route('**/*', async (route) => {
        console.log('Intercepted request:', route.request().url(), route.request().method());
    });
    await page.goto('https://https:/www.flipkart.com');
});


test('Intercept with fake data', async ({ page }) => {

    let fakeResponse = [
        {
            name:"Macbook Pro",
            price: 2000,
            description: "Apple Macbook Pro 2024"
        },
        {
            name:"Dell XPSs",
            price: 1500,
            description: "Dell XPS 13 2024"
        }
    ];
    await page.route('**/api/products', async (route) => {
        console.log('Intercepted request:', route.request().url(), route.request().method());
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(fakeResponse),
        });
    });
    
    await page.goto('https:/www.flipkes.com/api/products');
    await page.pause();
   let fakeresponse = await page.evaluate(async=>fetch('https:/www.flipkes.com/api/products'));
   console.log(fakeResponse);
});