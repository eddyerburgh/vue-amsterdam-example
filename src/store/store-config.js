const initialState = {
  counter: 0,
  items: [{}, {}]
}

const mutations = {
  increment (state) {
    state.counter++
  }
}

const getters = {
  counter (state) {
    return state.counter
  },
  items (state) {
    return state.items
  }
}

export default {
  state: initialState,
  mutations,
  getters
}
