import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  }
})

export default createStore({
  state: {
    userProfile: null,
    token: null
  },
  mutations: {
    setUserProfile(state, value) {
      state.userProfile = value
    },
    setToken(state, value) {
      state.token = value
    },
  },
  actions: {
  },
  modules: {
  }
})
