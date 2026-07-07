import axios from 'axios';

export default axios.create({
    baseURL:'http://35.170.72.69:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
