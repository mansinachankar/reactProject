
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props){

const optionSelectionHandler=(selectedOption)=>{
 console.log(selectedOption);
};

return(
<div className="expenses"> 
<ExpensesFilter onOptionSelect={optionSelectionHandler}/>

<ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}> 
        </ExpenseItem>
        <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}> 
        </ExpenseItem>
        <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}>
        </ExpenseItem>
        <ExpenseItem 
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}> 
        </ExpenseItem>
        <ExpenseItem
        date={props.items[4].date}
        title={props.items[4].title}
        amount={props.items[4].amount}> 
        </ExpenseItem>
        


</div>


);


}
export default Expenses;