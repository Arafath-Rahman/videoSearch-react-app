import axios from 'axios';

const KEY = 'AIzaSyCrS77J2mOYkdWdZlxFxzh3UKax8NOokRI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});