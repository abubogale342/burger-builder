import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-tutor-default-rtdb.firebaseio.com',
});

export default instance;
