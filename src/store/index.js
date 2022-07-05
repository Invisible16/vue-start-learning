import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      filterObj: { userId: 1 },
      todos: [],
      count: 39,
    };
  },
  getters: {},
  mutations: {
    updateFilter(state, filter) {
      state.filterObj = filter;
    },
    setListTodo(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    async fetchTodos({ commit }, userId) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?completed=true&userId=" +
          userId
      );
      const data = await res.json();
      console.log(data);
      commit("setListTodo", data);
    },
  },
  modules: {},
});
