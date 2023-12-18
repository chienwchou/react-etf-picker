import QUESTIONS from "../../assets/etf-questions";
const questions = QUESTIONS;

export default function Questionnaire() {
    return (
        <section>
            <div className="px-5 py-3">
                <progress />
            </div>
            <h2 className="px-5 py-3 font-bold text-2xl">As I withdraw money from these investments, I plan to spend it over a period of...</h2>
            <div className="py-5">
                <div className="flex flex-row">
                    <div className="basis-3/5">
                        <ul className="questionaiire-answers">
                            <li className="m-4 mr-20 p-5 border-solid border border-black border-opacity-50 flex items-center">
                                <input id="test1" type="radio" className="mr-3"></input>
                                <label for='test1' className="font-bold text-2xl">2 years or less</label>
                            </li>
                            <li className="m-4 mr-20 p-5 border-solid border border-black border-opacity-50">3-5 years</li>
                            <li className="m-4 mr-20 p-5 border-solid border border-black border-opacity-50">6-10 years</li>
                            <li className="m-4 mr-20 p-5 border-solid border border-black border-opacity-50">11-15 years</li>
                            <li className="m-4 mr-20 p-5 border-solid border border-black border-opacity-50">More than 15 years</li>
                        </ul>
                        <div className="flex py-4">
                            <button className="mx-5 py-5 px-16 bg-white text-black rounded-full shadow-lg shadow-indigo-500/50 font-bold">Back</button>
                            <button className="mx-5 py-5 px-16 bg-black text-white border-solid border-3 border-black rounded-full shadow-lg shadow-indigo-500/50 font-bold">Next</button>
                        </div>
                    </div>
                    <div className="basis-2/5 flex flex-col items-start p-5">
                        <div>
                            <h3 class="font-bold text-2xl pb-3">Why am I being asked this question?</h3>
                            <p>Once you start withdrawing and spending your money, you'll want to be sure it will last as long as you need it to. Depending on your goal, that could be a short or long period of time. It might be a onetime expense, such as buying a house, several years of paying college tuition, or even decades of enjoying a long retirement. These future plans are important to consider when mapping out an investment strategy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}