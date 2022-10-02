
import "./ExpenseDate.css"

function ExpenseDate(props){
    return(
        <div className="ExpenseDate">
            <div className="date">
                <h4>{props.date.toLocaleString("en-US",{month:"long"})}</h4>
                <h4>{props.date.toLocaleString("en-US",{day:"2-digit"})}</h4>
                <h4>{props.date.getFullYear()}</h4>
            </div>
        </div>
    )
}

export default ExpenseDate;