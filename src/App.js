import Header from "./components/Header";
import Footer from "./components/Footer";
import Questionnaire from "./components/questionaiire/Questionaiire";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import TakeQuiz from "./components/TakeQuiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/take-a-quiz" element={<TakeQuiz />}></Route>
          <Route path="/questionnaire" element={<Questionnaire />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
