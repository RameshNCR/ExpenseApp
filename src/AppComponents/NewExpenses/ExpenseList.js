import ExpenseItem from "../Expenses/ExpenseItem";
import './ExpenseList.css'
function ExpenseList(props){
    if(props.filterExpense.length===0){
        return(<h2>Expense Not found</h2>)
    }
    return(
        <div className="ExpenseList">
            {(props.filterExpense.map((user) => (<ExpenseItem key={user.id}date={user.d} purpose={user.p}rupees={user.r}></ExpenseItem>
                )))}
        </div>
    )
}
export default ExpenseList;