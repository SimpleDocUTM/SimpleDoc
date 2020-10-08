import axios from "axios";

import { LOCAL_API_URL } from "../constants";

var SimpleDocRest = axios.create({
    baseURL: LOCAL_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

export default SimpleDocRest;