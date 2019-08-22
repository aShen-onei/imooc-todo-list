<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './todo/header.vue'
import Footer from './todo/footter.jsx'
import Todo from './todo/todo.vue'
export default {
    components:{
        Header,
        Footer,
        Todo
    },
    created(){
        let output = '这是慕课网的Jokcy老师的创建todo应用的视频\nJokcy老师的github仓库源码地址为：https://github.com/Jokcy/vue-todo-tech \
                \n该课程的慕课网学习地址为：https://www.imooc.com/learn/935 '
        console.log(output)
    }
}
</script>
<style lang="scss" scoped>
#app{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    #cover{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #999;
        opacity: 0.9;
        z-index: -1;
    }
}
</style>