import "./style/App.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Offer1 } from "./Pages/Offers/Offer1";
import { Offer2 } from "./Pages/Offers/Offer2";
import { Offer3 } from "./Pages/Offers/Offer3";
import { Offer4 } from "./Pages/Offers/Offer4";
import { Offer5 } from "./Pages/Offers/Offer5";
import { Offer6 } from "./Pages/Offers/Offer6";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer-1" element={<Offer1 />} />
          <Route path="/offer-2" element={<Offer2 />} />
          <Route path="/offer-3" element={<Offer3 />} />
          <Route path="/offer-4" element={<Offer4 />} />
          <Route path="/offer-5" element={<Offer5 />} />
          <Route path="/offer-6" element={<Offer6 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
