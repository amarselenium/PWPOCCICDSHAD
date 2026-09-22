import { APIRequestContext } from "@playwright/test";


export class ApiHelper {
    private request: APIRequestContext;
    private baseUrl: string;    

    constructor(request: APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    }

    ///GET call

    async get(endpoint: string, headers?: Record<string, string>) {
        const response = await this.request.get(`${this.baseUrl}${endpoint}`, {
            headers: headers,
        });
        return response;
    }

    ///POST call

    async post(endpoint:string, data: any, headers?: Record<string, string>) { 
        let response = await this.request.post(`${this.baseUrl}${endpoint}`, {
            headers: headers,
            data: data,
        });

        return {
           status: response.status(),
           body: await response.json()  
        };
    }

    async put(endpoint:string, data: any, headers?: Record<string, string>) {
        let response = await this.request.put(`${this.baseUrl}${endpoint}`, {
            headers: headers,
            data: data,
        });
         return {
           status: response.status(),
           body: await response.json()  
        };
    }
    
    async delete(endpoint:string, headers?: Record<string, string>) {
        let response = await this.request.delete(`${this.baseUrl}${endpoint}`, {
            headers: headers,
        });
        return {
           status: response.status(), 
        };
    }
}   


