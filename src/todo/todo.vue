// 中部todo组件

<template>
    <section class="real-app">
        <input
            type="text"
            class="input-class"
            autofocus="autofocus"
            placeholder="接下来要做什么"
            @keyup.enter="addTodo"
        >
        <ITEM
            v-for="todo in filterTodos"
            :key="todo.id"
            :todo="todo"
        ></ITEM>
        <TABS></TABS>
    </section>
</template>
<script>
import ITEM from './todoCompontent/item.vue'
import TABS from './todoCompontent/tabs.vue'
import {mapState} from 'vuex'
// let id = 0

export default {
    components:{
        ITEM,
        TABS
    },
    computed:{
        //先把todo暴露出来，因为总是在变化
        ...mapState({
            todos:state => state.todos,
        }),
        //中间tabs变化引起label变化
        filterTodos(){
            if(this.$store.state.filter === 'all'){
                return this.todos
            }
            let completed =this.$store.state.filter === 'completed'
            return this.todos.filter(todo => todo.completed === completed)
        }
    },
    methods:{
        addTodo(e){
            this.$store.dispatch('addTodo', e.target.value.trim())
            e.target.value = ''
        }
        
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/todo.scss'
</style>