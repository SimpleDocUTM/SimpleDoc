import axios from "axios";

import { API_URL } from "../constants";

var SimpleDocRest = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

export default SimpleDocRest;