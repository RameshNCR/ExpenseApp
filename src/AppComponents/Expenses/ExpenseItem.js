import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    let date1=props.date
    return(
        <div>
            <div className="flex-containr">
                <ExpenseDate date={date1}></ExpenseDate>
                <h3 className="prps">{props.purpose}</h3> 
                <h3 className="Rs">Rs.{props.rupees}</h3>
            </div>
        </div>
        
    )
}
export default ExpenseItem;