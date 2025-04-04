import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Contracter from '../Pages/ContractOwner/Contracter';
import Register from '../Pages/registerUser/Register';
import LandInspector from '../Pages/LandInspector/LandInspector';
import Seller from "../Pages/registerUser/Seller";
function Routess () {
    return (<>
     <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Contracter />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/inspector" element={<LandInspector />} />
        <Route path="/buyer" element={<LandInspector />} />
      </Routes>
    </Router>
    </>)
}
export default Routess;