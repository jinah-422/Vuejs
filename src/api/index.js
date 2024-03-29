import axios from "axios";

// 1. HTTP Request&Response관련 기본 설정 
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
    // return axios.get(config.baseUrl + 'news/1.json');
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserName(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchComment(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserName, fetchComment }