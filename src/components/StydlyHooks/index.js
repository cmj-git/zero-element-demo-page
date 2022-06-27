import Recat, {Component} from 'react'


//类式组件
//  class Hook extends Component{
//     state={count:0}

//     add = ()=>{
//         this.setState(state => ({count:state.count+1}))
//     }
//     render(){
        
//         return(

//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//             </div>
export default function index(){


    const [count,setcount] =React.useState(0)
    const [name,setName] =React.useState('tom')


    function add(){
        // setcount(count+1) 第一种方法
        setcount(count => count+1)
    }
    function changeName(){
     
        setName('jack')
    }
    
    return(
                <div>
                    <h2>当前求和为:{count}</h2>
                    <h2>当前求和为:{name}</h2>
                    <button onClick={add}>点我+1</button>
                    <button onClick={changeName}>点我改名</button>

                </div>
    )
}
         
     