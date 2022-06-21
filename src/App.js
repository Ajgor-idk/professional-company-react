import "./style/App.css";
import { Header } from "./Components/Header/Header";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { Workers } from "./Components/Workers/Workers";
import { Offers } from "./Components/Offers/Offers";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
        <Workers />
        <Offers />
      </main>
      <Footer />
    </>
  );
}

export default App;
