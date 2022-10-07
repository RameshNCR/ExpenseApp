import { useState } from "react";
import "./ExpenseForm.css"
function ExpenseForm(props){
    const [texts,settexts]=useState("");
    const [amounts,setamounts]=useState("");
    const [dates,setdates]=useState("");
    function text(event){
        settexts(event.target.value)
    }
    function amount(event){
        setamounts(event.target.value)
    }
    function date(event){
        setdates(event.target.value)
    }
    function Addexpepense(event){
        event.preventDefault();
        var datas=[{id:Math.floor(Math.random()*1000),d:new Date(dates),p:texts,r:amounts}];
        props.form(datas);
        settexts('');
        setamounts('');
        setdates('');
    }
    function cancel(){
        props.cancel()
    }
    return(
        <div className="ExpenseForm">
            <div className="Formcontainer">
                <form name="form">
                    <table className="ExpenseTable">
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor="text"><b>Text :</b></label>
                                <br></br>
                                <input type="text" id="text" value={texts} onChange={text}></input>
                            </td>
                            <td>
                                <label htmlFor="amount" ><b>Amount :</b></label>
                                <br></br>
                                <input type="number" id="amount" value={amounts} onChange={amount}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="date"><b>Date :</b></label>
                                <br></br>
                                <input type="date" id="date" value={dates}onChange={date} min="2000-01-01" max="2006-12-31"></input>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="Buttons">
                                <button className="cancelbtn" onClick={cancel}>Cancel</button>
                                <button className="addExbtn" onClick={Addexpepense}>Add Expense</button>
                            </td>
                        </tr>
                        </tbody>
                </table>
                </form>    
            </div>
        </div>
    )
}
export default ExpenseForm;