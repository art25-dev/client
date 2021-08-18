import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    date: null,
    navigation: [],
    history: [],
    postList: []
  },
  mutations: {
    setNavigation(state, navigation) {
      state.navigation = navigation
    },
    addHistory(state, id) {
      state.history.push(id)
    },
    delHistory(state) {
      if (state.history.length == 1 && state.history[0] === 'none') {
        return
      }
      state.history = state.history.slice(0, -1)
    },
    clearHistory(state) {
      state.history = ['none']
    },
    setPostList(state, postList) {
      state.postList = postList
    },
    setDate(state, date) {
      state.date = date
    },
  },
  actions: {
    // Запрос на сервер навигации
    async getNavigation({ commit, getters }, id = 'none') {
      try {
        if (getters.lastNavigation != id) {
          const navigation = await axios.get(`/api/nav/children/${id}`)
          commit("setNavigation", navigation.data)
        }
      } catch (e) {
        throw e
      }
    },
    // Запрос на сервер постов
    async getPostList({ commit }) {
      try {
        const postList = await axios.get(`/api/post/active`)
        commit("setPostList", postList.data)
      } catch (e) {
        throw e
      }
    },
    // Запрос даты и времени
    async getDate({ commit }) {
      try {
        const date = await axios.get(`/api/date`)
        commit("setDate", date.data)
      } catch (e) {
        throw e
      }
    },
  },
  getters: {
    navigation: state => state.navigation.sort((a, b) => (a.title > b.title ? 1 : -1)),
    prevNavigation: state => state.history.slice(-2, -1),
    lastNavigation: state => state.history.slice(-1),
    postList: state => state.postList,
    dateNow: state => state.date
  }
})
