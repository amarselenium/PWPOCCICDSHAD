import { test as BaseTest } from "@playwright/test";
import { ApiHelper } from "../api/ApiHelper";

type ApiTestFixtures = {
    apiHelper: ApiHelper;
};

export let test = BaseTest.extend<ApiTestFixtures>({
    apiHelper: async ({ request }, use) => {
        const apiHelper = new ApiHelper(request, process.env.API_BASE_URL!);
        await use(apiHelper);
    },
});

export { expect } from "@playwright/test";
