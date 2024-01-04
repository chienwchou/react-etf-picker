import Header from "./components/header";
import Footer from "./components/footer";
import Questionnaire from "./components/questionaiire/questionaiire";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import TakeQuiz from "./components/takeQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/take-a-quiz" element={<TakeQuiz />}></Route>
      </Routes>
      <Header />
      <Questionnaire />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
