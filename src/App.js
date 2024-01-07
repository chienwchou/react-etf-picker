import Header from "./components/Header";
import Footer from "./components/Footer";
import Questionnaire from "./components/questionaiire/Questionaiire";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import TakeQuiz from "./components/TakeQuiz";
import QuestionaiireResult from "./components/questionaiire/QuestionaiireResult";
import SimpleCalculator from "./components/SimpleCalculator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SimpleCalculator />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/take-a-quiz" element={<TakeQuiz />}></Route>
          <Route path="/questionnaire" element={<Questionnaire />}></Route>
          <Route
            path="/questionnaire/result"
            element={<QuestionaiireResult />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
