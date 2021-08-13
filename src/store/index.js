import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    navigation: [],
    history: [],
    postList: [],
    currentPost: {}
  },
  mutations: {
    setNavigation(state, navigation) {
      state.navigation = navigation
    },
    addHistory(state, id) {
      state.history.push(id)
    },
    delHistory(state) {
      if (state.history.length == 1 && state.history[0] === 'null') {
        return
      }
      state.history = state.history.slice(0, -1)
    },
    clearHistory(state) {
      state.history = ['null']
    },
    setPostList(state, postList) {
      state.postList = postList
      state.currentPost = postList[0]
    },
  },
  actions: {
    // Запрос на сервер навигации
    async getNavigation({ commit, getters }, id = 'null') {
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
  },
  getters: {
    navigation: state => state.navigation.sort((a, b) => (a.title > b.title ? 1 : -1)),
    prevNavigation: state => state.history.slice(-2, -1),
    lastNavigation: state => state.history.slice(-1),
    postList: state => state.postList,
    first: state => state.currentPost,
    postItem: state => id => state.postList.find(post => post._id === id)
  }
})
