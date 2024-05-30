import axios from "axios"

export const api = axios.create({
    baseURL: "http://3.147.81.151:3333"
})