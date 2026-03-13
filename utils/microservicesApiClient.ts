import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_GATEWAY_SERVICE_URL;

// Default headers for different content types
const defaultHeaders = {
    json: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    form: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"
    }
};

// Create axios instance for microservices
const microservicesClient = axios.create({
    timeout: 200000,
});

// Request interceptor
microservicesClient.interceptors.request.use(async (request) => {
    // Extract the service name from the URL (e.g., /auth/login -> auth)
    const service = request.url?.split('/')[1];
    
    if (service) {
        // Construct the base URL for the specific microservice
        request.baseURL = `${baseURL}/${service}/api/v1`;
    }

    // Add authentication headers if auth is true
    if (request.auth) {
        const accessToken = "Bearer Access Token";
        if (accessToken) {
            request.headers.set("Authorization", `Bearer ${accessToken}`);
            request.headers.set("Secret-Key", `Bearer ${accessToken}`);
        }
    }

    // Use default headers if no custom headers are provided
    if (!request.headers.get("Content-Type")) {
        const contentType = request.data instanceof FormData ? "form" : "json";
        Object.entries(defaultHeaders[contentType]).forEach(([key, value]) => {
            request.headers.set(key, value);
        });
    }

    return request;
});

// Helper function to make requests to microservices
export const microservicesRequest = async (config: any) => {
    return microservicesClient.request(config);
};

// Export the axios instance for direct use if needed
export default microservicesClient; 


// Example usage
// // For auth service
// await microservicesRequest({
//     method: 'POST',
//     url: '/auth/login',
//     data: { /* login data */ }
//   });

// // For properties service
// await microservicesRequest({
//     method: 'GET',
//     url: '/properties/list'
//   });

// // For users service with auth
// await microservicesRequest({
//     method: 'GET',
//     url: '/users/list',
//     auth: true
//   });