import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/urban-living-109cf/us-central1/api'
})    

export default instance;