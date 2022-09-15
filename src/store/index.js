import { createStore } from "vuex";

export default createStore({
  state: {
    selectItem: {
      uf: null,
      County: null,
    },
  },
  mutations: {
    SEND_UF(state, payload) {
      return (state.selectItem.uf = payload);
    },
    SEND_COUNTY(state, payload) {
      return (state.selectItem.County = payload);
    },
    CLEAN_STATE(state) {
      return (state.selectItem = {
        uf: null,
        County: null,
      });
    },
  },
  actions: {
    sendUf(context, payload) {
      context.commit("SEND_UF", payload);
    },
    sendCounty(context, payload) {
      context.commit("SEND_COUNTY", payload);
    },
    cleaState(context) {
      context.commit("CLEAN_STATE");
    },
  },
  modules: {},
});
