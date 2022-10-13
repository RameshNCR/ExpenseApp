import { useState } from 'react';
import ExpenseList from '../NewExpenses/ExpenseList';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css"
function Expenses(props){
    let user=props.user1;
    let filterExpense
    const[value1,setvalue1]=useState("selectyear");
    function year(details){
        setvalue1(details)
    }
    (value1==="selectyear") ? filterExpense=user :
    filterExpense=user.filter((user)=>{
        return(user.d.getFullYear().toString()===value1);
    })
    return(
        <div className="Expenses">
            <Card className="container">
                <ExpenseFilter value={value1} year={year}></ExpenseFilter>
                <ExpenseList filterExpense={filterExpense}></ExpenseList>
                
                {/* <ExpenseItem date={user[0].d}purpose={user[0].p}rupees={user[0].r}></ExpenseItem>
                <ExpenseItem date={user[1].d}purpose={user[1].p}rupees={user[1].r}></ExpenseItem> 
                <ExpenseItem date={user[2].d}purpose={user[2].p}rupees={user[2].r}></ExpenseItem> */}
            </Card>
        </div>
    )
}
export default Expenses;