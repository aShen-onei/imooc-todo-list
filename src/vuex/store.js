// 数据统一管理

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'

Vue.use(Vuex)

//新建状态，todos列表
//新建状态，是否完成
let id = 0

const state = {
    //数据状态
    todos:[],
    filter:'all'
}
//mutations函数实现
const mutations = {
    //添加todo事件
    add_Todo(state, text){
        state.todos.unshift({
            id:id++,
            content:text,
            completed:false
        })
    },
    //删除todo事件
    del_Todo(state, id){
        state.todos.splice(state.todos.findIndex(todo => todo.id === id), 1)
    },
    //filter状态变换
    change_Filter(state, FilterState){
        state.filter = FilterState
    },
    //删除已经完成的todo事件
    clear_all_completed(){
        state.todos = state.todos.filter(todo => !todo.completed)
    }
}

//新建store
const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default store