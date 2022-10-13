import { useState } from 'react';
import './App.css';
import Expenses from './AppComponents/Expenses/Expenses';
import NewExpenseForm from './AppComponents/NewExpenses/NewExpenseForm';

function App() {
  let PreviousExps=[
    {id:1,d:new Date(2000,8,23),p:"Jwel Loan",r:"20000"},
    {id:2,d:new Date(2001,7,28),p:"House Loan",r:"100000"},
    {id:3,d:new Date(2002,5,21),p:"Grocery ",r:"1500"},
    {id:4,d:new Date(2003,6,11),p:"Agri Loan",r:"150000"},
    {id:5,d:new Date(2004,11,1),p:"college fees",r:"10000"},
    {id:6,d:new Date(2005,9,31),p:"Bike Loan",r:"140000"}
  ]
  const [user2,setuser2]=useState(PreviousExps);
  function data(details){
    setuser2((user)=>{
      return[...details, ...user]
    });
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1 className='heading'>Expense App</h1>
      </div>
      <div className='body'>
        <NewExpenseForm data={data}></NewExpenseForm>
        <Expenses user1={user2}></Expenses>
      </div>
    </div>
  );
}

export default App;
