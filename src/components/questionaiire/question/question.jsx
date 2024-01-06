export default function Question({
  answer,
  question,
  questionIndex,
  onChange,
  currentQuestionIndex,
}) {
  if (currentQuestionIndex !== questionIndex) return null;

  return (
    <div
      style={{
        minHeight: "700px",
      }}
    >
      <h2 className="px-5 py-3 font-bold text-2xl">{question.header}</h2>
      <div className="py-5">
        <div className="flex flex-row">
          <div className="basis-3/5">
            <ul className="questionaiire-answers">
              {question.selections.map((selection, selectionIndex) => {
                const selectId = `${questionIndex}-${selectionIndex}`;
                console.log(answer, selectionIndex);
                return (
                  <li
                    key={`select-${selectId}`}
                    className="m-4 mr-20 p-5 border-solid border border-black border-opacity-50 flex items-center"
                  >
                    <input
                      id={`select-${selectId}-input`}
                      type="radio"
                      name={`input-${questionIndex}`}
                      value={selectionIndex}
                      className="mr-3"
                      onChange={(events) => onChange(events, questionIndex)}
                      checked={answer == selectionIndex}
                    ></input>
                    <label
                      htmlFor={`select-${selectId}-input`}
                      className="font-bold text-2xl"
                    >
                      {selection}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="basis-2/5 flex flex-col items-start p-5">
            <div>
              <h3 className="font-bold text-2xl pb-3">
                Why am I being asked this question?
              </h3>
              <p>
                Once you start withdrawing and spending your money, you&apos;ll
                want to be sure it will last as long as you need it to.
                Depending on your goal, that could be a short or long period of
                time. It might be a onetime expense, such as buying a house,
                several years of paying college tuition, or even decades of
                enjoying a long retirement. These future plans are important to
                consider when mapping out an investment strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
