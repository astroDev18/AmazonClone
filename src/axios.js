import axios from 'axios';

const instance = axios.create({
    baseURL: ' https://us-central1-ecommercestore-1698e.cloudfunctions.net/api' //  The API (cloud function) URL
})
// http://localhost:5001/ecommercestore-1698e/us-central1/api
export default instance;

