import "./App.css";

function App() {
  return (
    <>
      <div className="father-container">
        <h1 className="main-title">Expense Tracker</h1>
        <div className="balance">
          <h2 className="h2">YOUR BALANCE</h2>
          <h1 className="h2 money">$0.00</h1>
        </div>
        <div className="father-card">
          <div className="right-card">
            <h1>INCOM</h1>
            <h1 className="green-money">$0.00</h1>
          </div>
          <div className="left-card">
            <h1>EXPENSE</h1>
            <h1 className="red-money">$0.00</h1>
          </div>
        </div>
        <div className="history">
          <h1 className="h2">History</h1>
          <div className="long-card">
            <p className="transaction">No transaction</p>
          </div>
          <div className="imput-card">
            <h1 className="h2">Add New Tarnsaction</h1>
            <h2 className="h2">Text</h2>
            <input className="input" type="text" placeholder="Enter text.." />
            <h1 className="h2">Amount (+incom - expense)</h1>
            <input className="input" type="text" placeholder="Enter amount.." />
            <button className="Add-button" >Add Transaction</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
