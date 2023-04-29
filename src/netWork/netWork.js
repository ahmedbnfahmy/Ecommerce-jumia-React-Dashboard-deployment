import axios from 'axios'
export const axiosInstance = axios.create({
    // BASE_URL:'http://localhost:3030/api'
    // baseURL:'http://localhost:3030/api'
    baseURL:'https://ecommerce-dashboard-website-api2.onrender.com/api'
});

axiosInstance.interceptors.request.use(
    function(config){
        // config.headers['Authorization'] = localStorage.getItem('token');
        config.headers['Authorization'] = localStorage.getItem('token');
        config.headers['Access-Control-Allow-Origin'] = '*';
        return config;
    },
    function(error){
        // console.log('hhhhhhhhh')
        return Promise.reject(error)
    }
)

// export const APIURL = 'http://localhost:3030/'
export const APIURL = 'https://ecommerce-dashboard-website-api2.onrender.com/api'