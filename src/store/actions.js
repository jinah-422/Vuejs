import { fetchNewsList, fetchAskList ,fetchJobsList } from '../api/index.js';

export default {
    /* 화면단 OOOView.vue에서 호출한 actions(fetchOOOList)수행
        response.data를 {data}로 받고 context.commitdms {commit}으로
        mutations (SET_OOO) 호출 */

    FETCH_NEWS({commit}){
        fetchNewsList()
        .then(({data}) => {
            commit('SET_NEWS', data)
        })
        .catch(error => console.log(error))
    },

    FETCH_ASK({commit}){
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASK', data)
        })
        .catch(error => console.log(error))
    },

    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data)
        })
<<<<<<< HEAD
    },
    FETCH_ASKS({commit}) { // context object에서 commit하나만 사용 - destructuring 구조분해 - 특정객체의 값 하나만 사용
        fetchAskList()
        .then(({data}) => { // response객체에서 data값 하나만 사용
            commit('SET_ASKS', data)
        })
        .catch(error => {
            console.log(error)
        })
    },

    FETCH_USERS({commit}, username) {
        fetchUserName(username)
        .then(({data}) => {
            commit('SET_USERS', data)
        })
        .catch(error => { 
            console.log(error)
        })
    },

    FETCH_ITEM({commit}, userid) {
        fetchComment(userid)
        .then(({data}) => {
            commit(`SET_ITEM`, data)
        })
        .catch(error => {
            console.log(error)
        })
    },

    FETCH_LIST({commit}, pageName) {
        fetchList(pageName)
        .then(({data}) =>
            commit('SET_LIST', data))
        .catch(error =>
            console.log(error))
=======
        .catch(error => console.log(error))
>>>>>>> 8ac346355a0a2d9ceba259ff0b6b662266193670
    }

}