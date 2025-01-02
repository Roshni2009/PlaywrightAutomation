const { chromium } = require('playwright');
const config = require('./config');

class ApiClient {
    constructor() {
        this.response = null;
        this.browser = null;
        this.context = null;
    }

    async initialize() {
        this.browser = await chromium.launch();
        this.context = await this.browser.newContext();
        await this.context.setExtraHTTPHeaders(config.headers);

        const page = await this.context.newPage();
        this.request = page.request;

        // Fetch CSRF token
        await this.fetchCsrfToken();
    }

    async fetchCsrfToken() {
        try {
            const response = await this.request.get(config.baseURL + '/repositories/docbase1', {
                headers: {
                    'Authorization': config.headers['Authorization'],
                    'Content-Type': config.headers['Content-Type'],
                    'Accept': config.headers['Accept'],
                    'username': config.headers['username'],
                    'user_login_name': config.headers['user_login_name'],
                    'user_password': config.headers['user_password'],
                    'user_source': config.headers['user_source'],
                    'user_address': config.headers['user_address']
                }
            });
            console.log('Response Headers - Mahesh:', response.headers()); // Log the response headers
            const csrfToken = response.headers()['documentum-csrf-token'];
            console.log('Fetched CSRF Token:', csrfToken); // Log the fetched CSRF token
            if (csrfToken) {
                config.headers['documentum-csrf-token'] = csrfToken;
                await this.context.setExtraHTTPHeaders(config.headers);

                // Set cookies if any are present in the response
                const cookies = response.headers()['set-cookie'];
                console.log('Fetched Documentum Cookie - Mahesh:', cookies);
                }
            
        } catch (error) {
            console.error('Failed to fetch CSRF token:', error);
            throw error;
        }
    }

    async get(endpoint) {
        try {
            endpoint = config.baseURL + endpoint;
            console.log('End Point:', endpoint);
            this.response = await this.request.get(endpoint, {
                headers: config.headers
            });
            return this.response;
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    }

    async post(endpoint, data) {
        try {
            endpoint = config.baseURL + endpoint;
            console.log('End Point for POST Request is: ', endpoint);
            this.response = await this.request.post(endpoint, {
                headers: config.headers,
                data: JSON.stringify(data)
            });
            return this.response;
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    }

    async put(endpoint, data) {
        try {
            endpoint = config.baseURL + endpoint;
            console.log('End Point:', endpoint);
            this.response = await this.request.put(endpoint, {
                headers: config.headers,
                data: JSON.stringify(data),
            });
            return this.response;
        } catch (error) {
            console.error('PUT request failed:', error);
            throw error;
        }
    }

    async close() {
        await this.context.close();
        await this.browser.close();
    }
}

module.exports = ApiClient;