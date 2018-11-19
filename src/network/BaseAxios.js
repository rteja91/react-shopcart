import axios from 'axios';

const instance = axios.create({
    baseURL: "https://rtshopcart.firebaseio.com"
})

export default instance;