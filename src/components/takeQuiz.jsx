import Disclaimer from "./layouts/Disclaimer";
import etfQuiz from "../assets/etf-quiz.jpg";
import CustomModal from "./layouts/CustomModal";
import { useRef } from "react";

export default function TakeQuiz() {
  const dialog = useRef();

  function openModel() {
    console.log(dialog);
    dialog.current.showModal();
  }

  function closeModel() {
    dialog.current.close();
  }
  return (
    <>
      <section className="flex flex-row">
        <div className="flex flex-1 flex-col justify-center items-center">
          <h2 className="text-3xl py-4 font-bold">ETF Investing Quiz</h2>
          <p>Our quiz can help you find a path that best fits your needs.</p>
          <button
            className="py-5 px-10 bg-purple-950 text-white my-10 rounded-full shadow-lg shadow-indigo-500/50"
            onClick={openModel}
          >
            Start the Quiz
          </button>
        </div>
        <div className="flex-1">
          <img className="object-cover" src={etfQuiz} alt="etfQuiz.jpg"></img>
        </div>
      </section>
      <CustomModal ref={dialog}>
        <div className="modal-header py-5 px-5 relative">
          <span
            className="text-black absolute top-0 right-0 p-5 cursor-pointer"
            onClick={closeModel}
            onKeyDown={closeModel}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
          <h2 className="text-3xl font-bold text-center">
            Consent to electronic delivery & terms and conditions of use
          </h2>
        </div>
        <div className="modal-content py-8 px-5">
          <p className="py-2">
            The allocations provided are based on generally accepted investment
            principles. There&apos;s no guarantee, however, that any particular
            asset allocation or combination of investments will meet your
            objectives. All investments involve risks, and fluctuations in the
            financial markets and other factors may cause the value of your
            account to decline. You should consider all of your options
            carefully before investing. The investor questionnaire is provided
            to you free of charge. It doesn&apos;t provide comprehensive
            investment or financial advice. Vanguard isn&apos;t responsible for
            reviewing your financial situation or updating the suggestions
            contained herein.
          </p>
          <p className="py-2">
            By selecting Accept, you agree to the terms outlined on this page.
          </p>
          <p className="py-2">
            Duration of election & consent Your consent applies only to this
            particular request. If you request additional information, you may
            be required to consent to electronic delivery again.
          </p>
          <h3 className="py-2 font-semibold">Costs & risks</h3>
          <p className="py-2">
            Vanguard doesn&apos;t charge you a fee to use our website, but you
            could incur expenses from an internet service provider when you
            access information online. Also, be aware that your internet service
            provider may occasionally experience system failure, and hyperlinks
            to documents may not function properly.
          </p>
        </div>
        <div className="modal-footer flex items-center justify-center">
          <button className="mx-5 py-5 px-10 bg-red-700 text-white my-10 rounded-full shadow-lg shadow-indigo-500/50">
            Accept
          </button>
          <button
            className="mx-5 py-5 px-10 bg-transparent text-black my-10 border-solid border-3 border-black rounded-full shadow-lg shadow-indigo-500/50"
            onClick={closeModel}
          >
            Don&apos;t Accept
          </button>
        </div>
      </CustomModal>
      <Disclaimer>
        The Investor Questionnaire suggests an asset allocation based on
        information you enter about your investment objectives and experience,
        time horizon, risk tolerance, and financial situation. Your asset
        allocation is how your portfolio is divided among stocks, bonds, and
        short-term reserves. As your financial circumstances or goals change, it
        may be helpful to complete the questionnaire again and reallocate the
        investments in your portfolio. Before you begin, please review the
        questionnaire&apos;s assumptions and limitations and accept our terms
        and conditions by choosing Start the quiz.
      </Disclaimer>
    </>
  );
}
