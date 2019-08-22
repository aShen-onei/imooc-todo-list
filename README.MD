#使用vue+webpack创建一个todo应用
将项目克隆到本地后  
在本地文件夹目录的cmd中运行
```
npm install
```
安装相对应的依赖包，然后运行命令
```
npm run dev
```
运行项目，在浏览器中输入
```
localhost:8000
```
即可浏览本项目，打包项目运行命令
```
npm run build
```
项目就会打包在build文件夹的www目录下
即可浏览本项目
##项目概览
本项目是慕课网Jokcy老师的todo项目源代码实现，并加以改造与更新，使用vuex+props来代替Jokcy  
老师的仅用props来进行的组件之间的通信，使用vuex来实现组件与组件之间，子组件与子组件之间的  
通信，使用props来实现父组件与子组件之间的通信。优化了课程中webpack3与webpack4.之间的不同  
[详细的慕课网址为：] https://www.imooc.com/learn/935  
[Jokcy 老师原项目git仓库：] https://github.com/Jokcy/vue-todo-tech 
##本项目的项目结构
├─build
│  │  webpack.config.dev.js
│  │  webpack.config.prod.js
│  
├─src
│  │  app.vue
│  │  
│  ├─assets
│  │  ├─image
│  │  │      bg.jpeg
│  │  │      done.svg
│  │  │      round.svg
│  │  │      
│  │  └─style
│  │          footer.scss
│  │          global.scss
│  │          todo.scss
│  │          
│  ├─todo
│  │  │  footter.jsx
│  │  │  header.vue
│  │  │  todo.vue
│  │  │  
│  │  └─todoCompontent
│  │          item.vue
│  │          tabs.vue
│  │          
│  └─vuex
│          actions.js
│          getters.js
│          store.js
│          
│  .babelrc
│  .gitignore
│  index.html
│  main.js
│  package-lock.json
│  package.json
│  postcss.config.js
│  README.MD
│  
