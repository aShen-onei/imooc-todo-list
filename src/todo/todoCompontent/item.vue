//label标签，todo事件列表

<template>
    <div :class="['todo-item', todo.completed? 'completed':'']">
        <input 
            type="checkbox"
            class="toggle"
            v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button class="destory" @click="deleteTodo(todo.id)"></button>
    </div>    
</template>
<script>
export default {
    //使用props让父组件和子组件之间通信，子组件之间使用vuex通信
    props:{
        todo:{
            type:Object,
            required:true
        }
    },
    methods:{
        deleteTodo(id){
            this.$store.dispatch('delTodo', id)
        }
    }
}
</script>
<style lang="scss" scoped>
.todo-item{
    position: relative;
    background-color: #fff;
    font-size: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    &:hover{
        .destory:after{
            content: '❌'
        }
    }
    label{
        white-space: pre-line;
        word-break: break-all;
        padding: 15px 60px 15px 15px;
        margin-left: 45px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s
    }
    &.completed{
        label{
            color: #d9d9d9;
            text-decoration: line-through
        }
    }
}
.toggle{
    text-align: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    margin: auto 0;
    border: none;
    appearance: none;
    outline: none;
    &:after{
        content: url('../../assets/image/round.svg')
    }
    &:checked:after{
        content: url('../../assets/image/done.svg')
    }
}
.destory{
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    background-color:transparent;
    appearance: none;
    border-width: 0;
    cursor: pointer;
    outline: none;
}
</style>