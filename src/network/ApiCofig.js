import axios from 'axios';

export const BASE_URL = 'https://61fa8bc492093f0017ad98a8.mockapi.io/api/v1/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 45000
});


// Add interceptors
// axiosInstance.interceptors.request.use((request) => {console.log(request)});
// axiosInstance.interceptors.response.use(
//     (response) => {console.log(response)},
//     (error) => {console.log('error',error)}
// );

export default axiosInstance;
