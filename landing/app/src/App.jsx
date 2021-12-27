import "./App.css";
import { Articles } from "./blocks/articles/Articles";
import { Features } from "./blocks/features/Features";
import { Feedback } from "./blocks/feedback/Feedback";
import { Footer } from "./components/footer/Footer";
import { Header } from "./blocks/header/Header";
import { HowItWorks } from "./blocks/howItWorks/HowItWorks";
import { Logos } from "./blocks/logos/Logos";
import { Main } from "./blocks/main/Main";
import { VetInfo } from "./blocks/vetInfo/VetInfo";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
      <HowItWorks />
      <VetInfo />
      <Feedback />
      <Articles />
      <Logos />
      <Footer />
    </div>
  );
};

export default App;
