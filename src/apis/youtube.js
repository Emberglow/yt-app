import axios from 'axios';

const KEY = 'AIzaSyDCfwKjvhB07qQ_yw2mnwitLm1h1mrbgL4';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    }
});

