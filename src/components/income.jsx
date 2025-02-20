import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext'
const Income = () => {
  const {income} =useContext(GlobalContext);
  return (
    <div
    className="p-4 border bg-white text-center rounded shadow-sm"
    style={{ width: "200px" }}
  >
    <h3 className="fw-bold">INCOME</h3>
    <h3 className="text-success fw-bold">${income}</h3>
  </div>
  )
}

export default Income