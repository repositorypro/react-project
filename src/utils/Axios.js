import axios from "axios";

// https://book.alitechbot.uz/api/docs/
export const Axios = axios.create({
    baseURL: 'https://book.alitechbot.uz/api',
    timeout: 10000
});