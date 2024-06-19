import axios from "axios";

export const authenticationBaseURL = axios.create({
    baseURL: "https://perfectosri.software-total.com/api/v1",
});