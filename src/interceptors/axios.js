import axios from "axios";
import { baseUrl } from "/src/config/config";

console.log("gg", baseUrl )
const axiosApiInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosApiInstance;