
const questions = [{
    header: 'As I withdraw money from these investments, I plan to spend it over a period of...',
    selections: [
        '2 years or less',
        '3-5 years',
        '6-10 years',
        '11-15 years',
        'More than 15 years'
    ],
    content: {
        'header': 'Why am I being asked this question?',
        'text': ''
    }
}, {
    header: 'When making a long-term investment, I plan to keep the money invested for....',
    selections: [
        '1-2 years',
        '3-4 years',
        '5-6 years',
        '7-8 years',
        'More than 8 years'
    ],
    content: {
        'header': 'Why am I being asked this question?',
        'text': ''
    }
}, {
    header: 'When it comes to investing in stock or bond mutual funds or ETFs - or individual stocks or bonds - I would describe myself as...',
    selections: [
        'Very inexperienced',
        'Somewhat inexperienced',
        'Somewhat experienced',
        'Experienced',
        'Very experienced'
    ],
    content: {
        'header': '',
        'text': ''
    }
}, {
    header: 'I plan to begin taking money from my investments in...',
    selections: [
        '1 year or less',
        '1-2 years',
        '3-5 years',
        '6-10 years',
        '11-15 years',
        'More than 15 years'
    ],
    content: {
        'header': 'Why am I being asked this question?',
        'text': ''
    }
}, {
    header: 'My current and future income sources (for example, salary, social security, pensions) are...',
    selections: [
        'Very unstable',
        'Unstable',
        'Somewhat stable',
        'Stable',
        'Very stable',
    ],
    content: {
        'header': 'Why am I being asked this question?',
        'text': ''
    }
}, {
    header: 'From September 2008 through October 2008, bonds lost 4%. If I owned a bond investment that lost 4% in two months, I would...',
    selections: [
        'Sell all the remaining investment',
        'Sell a portion of the remaining investment',
        'Hold onto the investment and sell nothing',
        'Buy more of the remaining investment',
    ],
    content: {
        'header': 'Why am I being asked this question?',
        'text': ''
    }
}, {
    header: 'The chart shows the greatest 1-year loss and the highest 1-year gain on 3 different hypothetical investments of $10000. Given the potential gain or loss in any 1 year, I would invest money in...',
    selections: [
        'Minimal volatility',
        'Moderate volatility',
        'Most volatility',
    ],
    content: {
        'header': 'Why am I being asked this question?',
        'text': ''
    }
},
{
    header: 'During market declines, I tend to sell portions of my riskier assets and invest the money in safer assets',
    selections: [
        'Strongly disagree',
        'Disagree',
        'Somewhat agree',
        'Agree',
        'Strongly agree'
    ],
    content: {
        'header': 'Why am I being asked this question?',
        'text': ''
    }
},
{
    header: 'Generally, I prefer an investment with little or no ups and downs in value, and I am willing to accept the lower returns these investments may make.',
    selections: [
        'Strongly disagree',
        'Disagree',
        'Somewhat agree',
        'Agree',
        'Strongly agree'
    ],
    content: {
        'header': 'Why am I being asked this question?',
        'text': ''
    }
}
];

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