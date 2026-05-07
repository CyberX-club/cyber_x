// src/API.js
const getApiUrl = () => {
    // Check if the environment variable is set
    const apiUrl = process.env.REACT_APP_API_URL;

    // If not set, provide a default value
    if (!apiUrl) {
        console.warn('REACT_APP_API_URL is not set. Using default URL.');
        return 'http://localhost:5000/api';
    }

    return apiUrl;
};

export { getApiUrl };
