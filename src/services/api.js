import axios from "axios"

export const api = axios.create({
    baseURL: "https://3.147.81.151:3333"
})