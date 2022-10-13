import './ExpenseFilter.css'
function ExpenseFilter(props){
    let value1=props.value;
    function fill(event){
        props.year(event.target.value)
    }
    return(
        <div className="ExpenseFilter">
            <div className="filter">
                 <h4 className="year">Filter by year</h4>
                <select value={value1} onChange={fill}>
                    <option value={"selectyear"}>selectyear</option>
                    <option value={2000}>2000</option>
                    <option value={2001}>2001</option>
                    <option value={2002}>2002</option>
                    <option value={2003}>2003</option>
                    <option value={2004}>2004</option>
                    <option value={2005}>2005</option>
                    <option value={2006}>2006</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter;