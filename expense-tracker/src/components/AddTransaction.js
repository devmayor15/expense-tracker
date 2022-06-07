import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    function onSubmit(e){
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

  return (
    <>
        <h3>Add a new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='fore-control'>
                <label htmlFor='text'>Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className='fore-control'>
                <label for='amount'>
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction