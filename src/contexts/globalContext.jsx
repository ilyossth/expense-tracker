import { createContext, useState } from "react";

const GlobalContext = createContext({})

const GlobalProvider = ({ children }) => {
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expence, setExpence] = useState(0);
    const [transactions, setTransactions] = useState([]);


    return <GlobalContext.Provider
        value={{
            balance,
            setBalance,
            income,
            setIncome,
            expence,
            setExpence,
            transactions,
            setTransactions
        }}
    >
        {children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider }