import React, { useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
const AddNewTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0);
    const { transactions, setTransactions } = useContext(GlobalContext);
    const addTransaction = () => {
        const transaction = {
            text: text,
            amount: +amount,
        };
        console.log(transaction);
        setTransactions([...transactions, transaction])

    }
    return (
        <div className="mt-4">
            <h3 className="fw-bold">Add New Transaction</h3>

            <div className="mb-3">
                <label htmlFor="transactionText" className="form-label fw-bold">
                    Text
                </label>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    className="form-control"
                    id="transactionText"
                    placeholder="Enter text..."
                />
            </div>

            <div className="mb-3">
                <label htmlFor="transactionAmount" className="form-label fw-bold">
                    Amount (+income -expense)
                </label>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className="form-control"
                    id="transactionAmount"
                    placeholder="Enter amount..."
                />
            </div>

            <button onClick={addTransaction} className="btn btn-primary w-100 fw-bold">
                Add Transaction
            </button>
        </div>
    )
}

export default AddNewTransaction