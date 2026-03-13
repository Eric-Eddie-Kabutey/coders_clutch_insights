import axios from "axios";

// Define the base URL once to avoid repetition
const baseURL = process.env.NEXT_PUBLIC_BE_URL;

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

// Create a single axios instance
const apiClient = axios.create({
    baseURL,
    timeout: 200000,
});

// Request interceptor
apiClient.interceptors.request.use(async (request) => {
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

// Helper function to make requests
export const request = async (config: any) => {
    return apiClient.request(config);
};

// Export the axios instance for direct use if needed
export default apiClient;
