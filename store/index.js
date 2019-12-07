export const state = () => ({
  authenticating: false,
  session_token: null,
  current_user: {}
})

export const Types = {
  mutations: {
    SET_AUTHENTICATING: 'SET_AUTHENTICATING',
    SET_USER: 'SET_USER'
  },
  getters: {},
  actions: {
    USER_AUTHENTICATE: 'USER_AUTHENTICATE'
  }
}

export const mutations = {
  [Types.mutations.SET_AUTHENTICATING](state, status) {
    state.authenticating = status
  },

  [Types.mutations.SET_USER](state, user) {
    const { token } = user
    state.session_token = token
    state.current_user = user
  }
}

export const actions = {
  async [Types.actions.USER_AUTHENTICATE]({ commit, state }) {
    if (!state.authenicating) {
      commit(Types.mutations.SET_AUTHENTICATING, false)
      await this.$axios
        .$get('')
        .then((json) => {
          const { user } = json
          commit(Types.mutations.SET_AUTHENTICATING, true)
          commit(Types.mutations.SET_USER, user)
        })
        .catch((err) => {
          console.warn(err)
          commit(Types.mutations.SET_AUTHENTICATING, false)
        })
    }
  }
}
