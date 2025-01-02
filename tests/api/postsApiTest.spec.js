// const { request, expect, test } = require('playwright');

// describe('Simple API Test with Playwright', () => {
//     let apiContext;

//     beforeAll(async () => {
//         // Create a new APIRequestContext
//         apiContext = await request.newContext({
//             baseURL: 'https://dctm-ingress-ao.ce-shared.bp.anthos.otxlab.net/dctm-rest'; // Replace with the API URL you're accessing', // Example API
//             headers: {
//                 'Authorization': 'eyJraWQiOiIxZWQwYzkzMDZkZTQyNjI2NGNmNzAxNmQ4Njk4Nzk2OTA0NTVlYjM3IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI3YWU1MjE2OS01N2E3LTRmYTctOGQ0MS05NjRjMGRlYmI3NDMiLCJzY3AiOltdLCJkbXAiOnsiT1REU19DUkVEU19BVVRIIjoidHJ1ZSIsIk9URFNfSEFTX1BBU1NXT1JEIjoiZmFsc2UifSwic2F0IjoxNzMzODI5NjEzLCJpc3MiOiJodHRwczovL2RjdG0taW5ncmVzcy1hby5jZS1zaGFyZWQuYnAuYW50aG9zLm90eGxhYi5uZXQvb3Rkc3dzIiwiZ3J0IjoiaW1wbGljaXQiLCJzdWJfdHlwIjowLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJwaWQiOiJhb2RlbW9wYXJ0IiwicmlkIjp7fSwidGlkIjoiIiwic2lkIjoiNzliYThlMWMtZmVjNC00ODlhLThlNTktY2EwZjUzNzI3NDU4IiwidWlkIjoiZGExQGFvZGVtb3BhcnQiLCJ1bm0iOiJkYTEiLCJuYW1lIjoiZGExIiwiZXhwIjoxNzMzODM1NjEzLCJpYXQiOjE3MzM4Mjk2MTMsImp0aSI6IjA1NmU4MzFjLWU3YjMtNGZmNi04MmRiLTYzMGUwNDdjYmU3NSIsImNpZCI6ImQyX29hdXRoX2NsaWVudCJ9.UsWCAmUCfL6pAKeJNnUs2_ZJVpQtQ4YeuSKNMhagKGGJVD6lhL1PgEQx2JhTMvCwtwDXHzYfUVmMnd-EJo-kXWpee0zNcw8ooZhYwDc1L4qd42WwT7lek2Eb6v0wmPPkHbrj1n7IsvdoyqvkZyvEMvYkpeFV9pRAqJWd33mpJSWXzDW5sRTvOSZ_-VoEDMf7Xmtcv94w_BdfOiyj1jLOrDHDoCbKYepReGTPGA9b7tnGg0wHHqPCGsWqP1cnWNZEtVl10VSd-wsPg_NoRQxmSmQT822b7umUFDwaSLKk_v1oLgqbWFfLfSXDktu8AVpUE8gv0gKq9kbxTxIpvWHjqw', // Replace with your Bearer token
//                 'Content-Type': 'application/json;charset=UTF-8' // Replace with appropriate content type if needed
//               }
//         });
//     });

//     afterAll(async () => {
//         // Dispose of the API context
//         await apiContext.dispose();
//     });

//     test('GET /posts - Validate response status and structure', async () => {
//         //const response = await apiContext.get('/repositories/docbase1');
//         const response = await apiContext.get('/posts');
//         expect(response.ok()).toBeTruthy(); // Ensure status code is 2xx
//         const data = await response.json();
//         expect(Array.isArray(data)).toBe(true); // Check that the response is an array
//         expect(data.length).toBeGreaterThan(0); // Check that the array is not empty
//     });

    // test('POST /posts - Create a new post', async () => {
    //     const newPost = {
    //         title: 'Test Post',
    //         body: 'This is a test post.',
    //         userId: 1,
    //     };

    //     const response = await apiContext.post('/posts', { data: newPost });
    //     expect(response.ok()).toBeTruthy(); // Ensure status code is 2xx
    //     const responseData = await response.json();
        // expect(responseData.title).toBe(newPost.title); // Validate the response
        // expect(responseData.body).toBe(newPost.body);
        // expect(responseData.userId).toBe(newPost.userId);
    //});
// });

// tests/api/postsApiTest.js
//const { request, expect, test } = require('@playwright/test');
//const apiClient = require('../utils/apiClient');
// const apiClient = require('../../utils/apiClient');
// let apiClient;
const { test, expect } = require('@playwright/test');
const ApiClient = require('../utils/apiClient'); // Correct import

test.describe('Posts API Test', () => {
    let apiClient; // Declare apiClient as a let variable

    test.beforeAll(async () => {
        apiClient = new ApiClient();
        await apiClient.initialize();
    });

    test.afterAll(async () => {
        if (apiClient && apiClient.browser) {
            await apiClient.close(); // Ensure proper cleanup
        }
    });

    
    test('GET Repository Details', async () => {
        const response = await apiClient.get('/repositories/docbase1');
        console.log('Response Status Code for Docbase Details is: ', response.status());
        console.log('Response returned is:', await response.text());
        expect(response.ok()).toBeTruthy();
    });


    test('GET list of Cabinets Details', async () => {
        const response = await apiClient.get('/repositories/docbase1/cabinets');
        console.log('Response Status Code for Cabinets Details is: ', response.status());
        console.log('Response returned is for Listing Cabinets is:', await response.text());
        expect(response.ok()).toBeTruthy();
    });

    test('GET list of Users', async () => {
        const response = await apiClient.get('/repositories/docbase1/users');
        console.log('Response Status Code for Listing Users: ', response.status());
        console.log('Response returned is for Listing Users:', await response.text());
        expect(response.ok()).toBeTruthy();
    });
    
    test('GET list of Users Details', async () => {
        const response = await apiClient.get('/repositories/docbase1/users/da1');
        console.log('Response Status Code for User Details: ', response.status());
        console.log('Response returned is for User Details:', await response.text());
        expect(response.ok()).toBeTruthy();
    });
    
    test('GET list of Groups', async () => {
        const response = await apiClient.get('/repositories/docbase1/groups');
        console.log('Response Status Code for List of Groups: ', response.status());
        console.log('Response returned is for List of groups:', await response.text());
        expect(response.ok()).toBeTruthy();
    });
    
    test('POST request to Create User', async () => {
        await apiClient.fetchCsrfToken(); // Ensure CSRF token is fetched

        const payload = {
            "user_name": "maheshu", // Correct field name
            "user_login_name": "maheshu",
            "user_password": "Password@123456789",
            "user_source": "inline",
            "user_address": "maheshu@example.com"
        };

        try {
            const response = await apiClient.post('/repositories/docbase1/users', payload); // Replace '/users' with the actual endpoint
            console.log('Response - DCTMRest:', response); // Log the entire response object
            //console.log('User created - for Mahesh:', await response.json()); // Log the response data
            console.log('this is the csfr token recieved:' + response.headers()['documentum-csrf-token']);
            console.log('this is the dct cookie recieved:' + response.headers()['set-cookie']);
        } catch (error) {
            console.error('Error creating user:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
    });

});



