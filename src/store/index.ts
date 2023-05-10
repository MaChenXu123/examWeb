import { createStore } from 'vuex'

export default createStore({
  state:{
      //全局变量第几题
      examNum:1
  },
  getters: {
  },
  mutations: {
      //修改全局变量的方法 加一
      addExamNum(state){
        state.examNum++
      },
      //修改全局变量的方法 减一
      minusExamNum(state){
        state.examNum--
      },
      addValue(state,value){
          state.examNum=value
      }
  },
  actions: {
  },
  modules: {
  }
})
