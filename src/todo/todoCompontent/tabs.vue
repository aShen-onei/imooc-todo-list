// todo组件，下行的tabs组件

<template>
    <div class="helper">
        <span class="left">{{unFinishTodoLength}} item left</span>
        <span class="tabs">
            <span
                v-for="state in states"
                :key="state"
                :class="[state, filter === state? 'actived':'']"
                @click="toggle(state)"
            >
            {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted()">Clear Completed</span>
    </div>    
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            states:['all', 'active', 'completed']
        }
    },
    computed:{
        ...mapState({
            todos:state => state.todos,
            filter:state => state.filter
        }),
        unFinishTodoLength(){
            return this.todos.filter(todo => !todo.completed).length
        }
    },
    methods:{
        toggle(state){
            this.$store.dispatch('changeFilter', state)
        },
        clearAllCompleted(){
            this.$store.dispatch('clearAllCompleted')
        }
    }
}
</script>
<style lang="scss" scoped>
.helper{
    font-weight: 100;
    display:flex;
    justify-content: space-between;
    padding: 5px 0;
    line-height: 30px;
    background-color: #fff;
    font-size: 14px;
}
.left, .tabs, .clear{
    padding: 0 10px;
    box-sizing: border-box;
}
.left, .clear{
    width: 150px;
}
.left{
    text-align: left
}
.tabs{
    width: 200px;
    display: flex;
    justify-content: space-around;
    *{
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        border: 1px solid rgba(175, 47, 47, 0);
        &.actived{
            border-color: rgba(175, 47, 47, 0.4);
            border-radius: 5px;
        }
    }
}
.clear{
    text-align: right;
    cursor: pointer;
}
</style>