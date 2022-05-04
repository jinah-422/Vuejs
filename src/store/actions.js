import { 
    fetchAskList, 
    fetchJobsList, 
    fetchNewsList, 
    fetchList, 
    fetchUserName, 
    fetchComment } from "../api/index.js"

export default {
    FETCH_NEWS(context) {
        fetchNewsList() 
        .then(response => {
            context.commit('SET_NEWS',response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data)
         })
         .catch(error => {
            console.log(error)
        })
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
    }
}