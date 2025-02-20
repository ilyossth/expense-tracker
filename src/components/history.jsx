import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext';

const History = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <>
            <div className="mt-4">
                <h3 className="fw-bold">History</h3>

                {
                    transactions.map(t => {
                        return (
                            <p>
                                {t.text} -- {t.amount}
                            </p>
                        );
                    })}
                {
                    transactions.length == 0 && (

                        <div className="p-3 border bg-white rounded shadow-sm">
                            <p className="mb-0">No transaction</p>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default History