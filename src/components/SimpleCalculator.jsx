export default function SimpleCalculator() {
  return (
    <section className="">
      <div className="flex flex-row justify-around py-20 bg-purple-300">
        <h1 className="font-bold text-4xl">Compound Interest Calculator</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
        </div>
      </div>

      <div className="calculator-form mx-40 my-10">
        <h2 className="font-semibold py-5">
          Find out how your investment will grow over time with compound
          interest.
        </h2>
        <div className="flex flex-row my-1">
          <div className="flex flex-col">
            <label
              htmlFor="initial-investment"
              className="text-2 font-semibold pb-2"
            >
              Initial Investment:
            </label>
            <input
              id="initial-investment"
              type="number"
              name="initialInvestment"
              className="border-2 border-gray-400 rounded-lg p-2"
            ></input>
          </div>
        </div>
        <div className="flex flex-row my-1">
          <div className="flex flex-col">
            <label htmlFor="reg" className="text-2 font-semibold pb-2">
              Regular addition:
            </label>
            <div className="flex flex-row gap-3">
              <input
                id="regular-addition"
                type="number"
                name="regularAddition"
                className="border-2 border-gray-400 rounded-lg p-2"
              ></input>
              <select
                name="additionType"
                className="border-2 border-gray-400 rounded-lg p-2 w-60"
              >
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Biweekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quearterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-row my-1">
          <div className="flex flex-col">
            <label htmlFor="reg" className="text-2 font-semibold pb-2">
              Interest Rate:
            </label>
            <div className="flex flex-row gap-3">
              <input
                id="interest-rate"
                type="number"
                name="interestRate"
                className="border-2 border-gray-400 rounded-lg p-2"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-row my-1">
          <div className="flex flex-col">
            <label
              htmlFor="interest-is-compounded"
              className="text-2 font-semibold pb-2"
            >
              Interest is compounded:
            </label>
            <div className="flex flex-row gap-3">
              <select
                id="interest-is-compounded"
                name="InterestIsCompounded"
                className="border-2 border-gray-400 rounded-lg p-2 w-60"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quearterly</option>
                <option value="semi-annually">Semi-annually</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-row my-1">
          <div className="flex flex-col">
            <label
              htmlFor="interest-is-compounded"
              className="text-2 font-semibold pb-2"
            >
              Time Horizon:
            </label>
            <div className="flex flex-row gap-3">
              <select
                id="time-horizon"
                name="timeHorizon"
                className="border-2 border-gray-400 rounded-lg p-2 w-60"
              >
                <option value="years">Years</option>
                <option value="months">Months</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-row my-1">
          <div className="flex flex-col">
            <label
              htmlFor="years-to-grow"
              className="text-2 font-semibold pb-2"
            >
              Years to grow:
            </label>
            <div className="flex flex-row gap-3 items-center">
              <input
                id="years-to-grow"
                type="number"
                name="yearsToGrow"
                className="border-2 border-gray-400 rounded-lg p-2"
              ></input>
              <input
                id="default-range"
                type="range"
                value="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-row py-10">
          <button className="bg-purple-950 text-white font-semibold rounded-full py-3 px-10">
            Calculate
          </button>
        </div>
      </div>
    </section>
  );
}
