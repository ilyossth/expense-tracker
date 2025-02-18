// import "./App.css";

// function App() {
//   return (
//     <>
//       <div className="father-container">
//         <h1 className="main-title">Expense Tracker</h1>
//         <div className="balance">
//           <h2 className="h2">YOUR BALANCE</h2>
//           <h1 className="h2 money">$0.00</h1>
//         </div>
//         <div className="father-card">
//           <div className="right-card">
//             <h1>INCOM</h1>
//             <h1 className="green-money">$0.00</h1>
//           </div>
//           <div className="left-card">
//             <h1>EXPENSE</h1>
//             <h1 className="red-money">$0.00</h1>
//           </div>
//         </div>
//         <div className="history">
//           <h1 className="h2">History</h1>
//           <div className="long-card">
//             <p className="transaction">No transaction</p>
//           </div>
//          <div className="father-card">

//          </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div
      className="container py-4"
      style={{ backgroundColor: "#d6cfcb", minHeight: "100vh" }}
    >
      <h1 className="text-center fw-bold">Expense Tracker</h1>

      <div className="text-center mt-4">
        <h2 className="fw-bold">YOUR BALANCE</h2>
        <h1 className="fw-bold">$0.00</h1>
      </div>

      <div className="d-flex justify-content-center gap-4 my-4">
        <div
          className="p-4 border bg-white text-center rounded shadow-sm"
          style={{ width: "200px" }}
        >
          <h3 className="fw-bold">INCOME</h3>
          <h3 className="text-success fw-bold">$0.00</h3>
        </div>
        <div
          className="p-4 border bg-white text-center rounded shadow-sm"
          style={{ width: "200px" }}
        >
          <h3 className="fw-bold">EXPENSE</h3>
          <h3 className="text-danger fw-bold">$0.00</h3>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="fw-bold">History</h3>
        <div className="p-3 border bg-white rounded shadow-sm">
          <p className="mb-0">No transaction</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="fw-bold">Add New Transaction</h3>

        <div className="mb-3">
          <label htmlFor="transactionText" className="form-label fw-bold">
            Text
          </label>
          <input
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
            type="text"
            className="form-control"
            id="transactionAmount"
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn btn-primary w-100 fw-bold">
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default App;
