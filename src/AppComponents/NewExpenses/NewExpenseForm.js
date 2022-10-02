import "./NewExpenseForm.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpenseForm(props){
    const[value,setvalue]=useState(false)
    function form(datas){
            props.data(datas)
        }
        function expform(){
            setvalue(true)
        }
        function cancel(){
            setvalue(false)
        }
    return(
        <div className="NewExpensesForm">
            {value ?
             <ExpenseForm form={form} cancel={cancel}></ExpenseForm> : 
             <div className="btncontainer">
             <button className="expbtn" onClick={expform}><h2>Addexpepense</h2></button>
             </div>
            }
        </div>
    )
}
export default NewExpenseForm;