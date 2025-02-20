import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Balace from "./components/balance";
import Income from "./components/income";
import Expence from "./components/expence";
import History from "./components/history";
import AddNewTransaction from "./components/addNewTransaction";


function App() {
  return (
    <div
      className="container py-4"
      style={{ backgroundColor: "#d6cfcb", minHeight: "100vh" }}
    >
      <h1 className="text-center fw-bold">Expense Tracker</h1>

      <Balace />

      <div className="d-flex justify-content-center gap-4 my-4">
        <Income />
        <Expence />
      </div>

      <History />

      
      <AddNewTransaction/>
    </div>
  );
}

export default App;

