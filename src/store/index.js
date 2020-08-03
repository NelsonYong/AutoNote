import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserNote: {}
  },
  mutations: {

    getBaseInfo(state, payload) {
      state.UserNote.baseInfo = payload
    },
    getEduInfo(state, payload) {
      state.UserNote.eduInfo = payload
    },
    getProjectInfo(state, payload) {
      state.UserNote.projectInfo = payload
    },
    getWorkInfo(state, payload) {
      state.UserNote.workInfo = payload
    },
    getSkillInfo(state, payload) {
      state.UserNote.skillInfo = payload
    },
    getSelfInfo(state, payload) {
      state.UserNote.selfInfo = payload
    }
  },
  actions: {},
  modules: {},
  getters: {

    header(state) {

      // return state.UserNote.baseInfo.info[state.UserNote.baseInfo.info.length - 1].key

      // if (state.UserNote.baseInfo != null) {
      //   return 'dfd '
      // } else {
      //   return ''
      // }

    }


  }
})