import Disclaimer from "./layouts/disclaimer";
import etfQuiz from '../assets/etf-quiz.jpg';
import CustomModal from "./layouts/customModal";

export default function TakeQuiz() {
    return (
        <>
            <section className="flex flex-row">
                <div className="flex flex-1 flex-col justify-center items-center">
                    <h2 className="text-3xl py-4 font-bold">ETF Investing Quiz</h2>
                    <p>Our quiz can help you find a path that best fits your needs.</p>
                    <button className="py-5 px-10 bg-purple-950 text-white my-10 rounded-full shadow-lg shadow-indigo-500/50">Start the Quiz</button>
                </div>
                <div className="flex-1">
                    <img className="object-cover" src={etfQuiz.src}></img>
                </div>
            </section>
            <CustomModal />
            <Disclaimer>
                The Investor Questionnaire suggests an asset allocation based on information you enter about your investment objectives and experience, time horizon, risk tolerance, and financial situation. Your asset allocation is how your portfolio is divided among stocks, bonds, and short-term reserves. As your financial circumstances or goals change, it may be helpful to complete the questionnaire again and reallocate the investments in your portfolio.
                Before you begin, please review the questionnaire's assumptions and limitations and accept our terms and conditions by choosing Start the quiz.
            </Disclaimer>
        </>
    )
}