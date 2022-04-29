import Footer from "./Footer/Footer";
import Navbar from "./NavBar/NavBar";
import Shop from "./Shop/Shop";
import Landing from "./Landing/Landing";
import MyAccount from "./MyAccount/MyAccount";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div class="alert alert-secondary" role="alert">
          CTA and promotion
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
