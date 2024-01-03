import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/IntroPage/Intro";
import Footer from "./Components/Footer/Footer";
import Review from "./Components/Review/Review";
import Team from "./Components/Team/Team";
import Faq from "./Components/Faq/Faq";
import AreaofInterest from "./Components/AreaofInterest/AreaofInterest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <AreaofInterest />
      <Review />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
