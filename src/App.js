import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
      </Router>
    </>
  );
}

export default App;
