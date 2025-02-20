import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext'
const Expence = () => {
  const {expence} = useContext(GlobalContext);
  return (
    <div
    className="p-4 border bg-white text-center rounded shadow-sm"
    style={{ width: "200px" }}
  >
    <h3 className="fw-bold">EXPENSE</h3>
    <h3 className="text-danger fw-bold">${expence}</h3>
  </div>
  )
}

export default Expence