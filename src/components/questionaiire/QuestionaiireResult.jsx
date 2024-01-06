import { useNavigate } from "react-router-dom";

export default function QuestionaiireResult() {
  const navigate = useNavigate();

  function goToQuiz() {
    navigate("/questionnaire");
  }

  return (
    <section className="px-5 py-3">
      <div className="py-3">
        <h1 className="font-bold text-4xl">Your Results</h1>
      </div>

      <div className="py-3">
        <h2 className="font-bold text-2xl">Suggested allocation</h2>
        <div className="allocation-bar flex flex-row gap-4 py-3">
          <div
            className="bg-red-600 h-12"
            style={{
              width: `60%`,
            }}
          ></div>
          <div
            className="bg-blue-600 h-12"
            style={{
              width: `40%`,
            }}
          ></div>
          <div
            className="bg-purple-600 h-12"
            style={{
              width: `10%`,
            }}
          ></div>
        </div>
        <ul>
          <li className="flex flex-row items-center">
            <span className="bg-red-600 w-4 h-4 rounded-full block mr-5"></span>
            <p>Stocks: 60%</p>
          </li>
          <li className="flex flex-row items-center">
            <span className="bg-blue-600 w-4 h-4 rounded-full block mr-5"></span>
            <p>Bonds: 40%</p>
          </li>
          <li className="flex flex-row items-center">
            <span className="bg-purple-600 w-4 h-4 rounded-full block mr-5"></span>
            <p>Short-term reserves: 10%</p>
          </li>
        </ul>
        <button
          className="mt-5 py-5 px-5 text-black font-semibold rounded-full border-2 border-black"
          onClick={goToQuiz}
        >
          Retake the questionnaire
        </button>
      </div>

      <div className="py-10 w-6/12">
        <p className="my-3">
          In order to reach your new target asset mix, you&apos;ll need to
          allocate your investments by exchanging, selling, or buying funds
          within your account. The reallocation of your existing holdings
          won&apos;t happen automatically.
        </p>
        <p>
          You may want to write down the suggested percentages as you select
          funds. If you have a account, you can also see the target asset mix on
          your account overview page.
        </p>
      </div>
    </section>
  );
}
