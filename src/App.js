import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Explore from "./components/Explore";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import WhatsNew from "./components/WhatsNew";
import World from "./components/World";


function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Route>
          <Header />
          <Hero />
          <div className="relative container">
            <About />
            <div className="gradient-03 z-0" />
            <Explore />
          </div>
          <div class="relative container">
            <GetStarted />
            <div className="gradient-04 z-0" />
            <WhatsNew />
          </div>
          <div class="relative container">
            <World />
            <div className="gradient-04 z-0" />
            <Insights />
          </div>
          <div class="container relative">
            <Feedback />
            <div className="feedback-gradient z-0" />
            <Footer />
        
          </div>
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
