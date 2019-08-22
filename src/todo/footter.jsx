// 底部版权组件，使用jsx来进行渲染

import '../assets/style/footer.scss'
export default{
    data(){
        return{
            author:'Jokey'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>ly lisence @copyright {this.author}</span>
            </div>
        )
    }
}