import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        'Accept': 'application/vnd.github.v3+json'
    }
})

export default class ApiGitHub {
    static async get({url, query}) {
        try {
            const {data} = await instance.get(url, {params: query});
            return data;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }
}