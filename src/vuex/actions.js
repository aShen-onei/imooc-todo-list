//添加todo事件
export const addTodo = ({commit}, text) =>{
    commit('add_Todo', text)
}
//删除todo事件
export const delTodo = ({commit}, id) =>{
    commit('del_Todo', id)
}
//filter状态变换
export const changeFilter = ({commit}, FilterState) =>{
    commit('change_Filter', FilterState)
}
//删除完成的todo事件
export const clearAllCompleted = ({commit}) => {
    commit('clear_all_completed')
}