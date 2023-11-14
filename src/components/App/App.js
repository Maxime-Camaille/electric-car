import "./App.css";
import HomePage from "../../pages/HomePage";
import ServicesOverviewPage from "../../pages/ServicesOverviewPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesOverviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
