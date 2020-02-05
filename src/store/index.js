import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const options = {
  //用来存放数据的
  state: {
    isLogin: false
  },
  //用来修改state的属性
  mutations: {
    //获取调用ISLOGIN时传过来的数据payload,将数据进行处理修改state
    ISLOGIN(state, payload) {
      state.isLogin = payload
    }
  },
  //用来获取state里的东西
  getters: {
    isLogin: (state) => state.isLogin
  },
  //this.$store.dispatch("ISLOGINACTION", true);
  //经过action派遣后才到达mutation进行处理 此步骤可以省略
  actions: {
    //触发commit，接受dispatch传来的修改参数
    ISLOGINACTION({ commit }, payload) {
      commit('ISLOGIN', payload);
    }
  }
}

export default new Vuex.Store(options)
