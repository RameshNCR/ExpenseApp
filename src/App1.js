import './App1.css';
import {useState} from "react"
function App1(){
    const[color,setcolor]=useState("red");
    function chroma(event){
        setcolor(event.target.value)
    }
    return(
        <div className="App1" >
            <div className="box" 
            style={{backgroundColor:color,
            width: "100px",
            height: "100px",
            margin: "10px auto"}}>
            </div>
            <div style={{width:"110px",margin:"10px auto"}}>
                <input className='input' type="text" onChange={chroma} 
                style={{borderColor:color,
                textAlign:"center"}}></input>
            </div>
        </div>
    )
}
export default App1;
