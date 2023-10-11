import axios from "axios";


export const $api = axios.create({
    baseURL: 'http://harrypotter.api.ngknn.ru/api/',
});