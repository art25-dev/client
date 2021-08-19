import { createStore } from 'vuex'


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
          const req = await fetch(`/api/nav/children/${id}`);
          const navigation = await req.json()
          commit("setNavigation", navigation)
        }
      } catch (e) {
        throw e
      }
    },
    // Запрос на сервер постов
    async getPostList({ commit }) {
      try {
        const req = await fetch(`/api/post/active`);
        const postList = await req.json()
        commit("setPostList", postList)
      } catch (e) {
        throw e
      }
    },
    // Запрос даты и времени
    async getDate({ commit }) {
      try {
        const req = await fetch(`/api/date`);
        const date = await req.json()
        commit("setDate", date)
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
