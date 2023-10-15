import axios from "axios";


export const $api = axios.create({
    baseURL: 'https://harrypotter.api.ngknn.ru/api/',
});