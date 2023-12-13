import example1 from "../assets/example-1.png";
import example2 from "../assets/example-2.png";
import example3 from "../assets/example-3.png";
import calculator from "../assets/main-page-calculator.png"

export default function Homepage() {
    return (<main className="flex flex-col">
        <section className="flex flex-col bg-purple-200 p-8">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-4xl py-4">Choose the right ETFs for your portfolio</h1>
                <p className="font-semibold">The ETF picker enables you to refine the ETF Universe to a subset of ETFs that fit your investment goal.</p>
            </div>
            <div className="etfs-graphs-examples flex justify-around py-12 flex-wrap">
                <div className="">
                    <img className="max-w-xs p-5 bg-purple-400 rounded-xl" src={example1.src} alt="example1.png"></img>
                    <p className="text-center py-3">Conservative portfolio</p>
                </div>
                <div>
                    <img className="max-w-xs p-5 bg-purple-400 rounded-xl" src={example2.src} alt="example2.png"></img>
                    <p className="text-center py-3">Progressive portfolio</p>
                </div>
                <div>
                    <img className="max-w-xs p-5 bg-purple-400 rounded-xl" src={example3.src} alt="example3.png"></img>
                    <p className="text-center py-3">Risk-Tolerant portfolio</p>
                </div>
            </div>
            <div className="etfs-graphs-examples flex justify-around py-12 flex-wrap">
                <div className="">
                    <img className="max-w-xs p-5 bg-purple-400 rounded-xl" src={example1.src} alt="example1.png"></img>
                    <p className="text-center py-3">Conservative portfolio</p>
                </div>
                <div>
                    <img className="max-w-xs p-5 bg-purple-400 rounded-xl" src={example2.src} alt="example2.png"></img>
                    <p className="text-center py-3">Progressive portfolio</p>
                </div>
                <div>
                    <img className="max-w-xs p-5 bg-purple-400 rounded-xl" src={example3.src} alt="example3.png"></img>
                    <p className="text-center py-3">Risk-Tolerant portfolio</p>
                </div>
            </div>
        </section>
        <section>
            <div className="flex p-8">
                <div className="flex flex-1 justify-around py-12 shadow-2xl">
                    <img src={calculator.src}></img>
                </div>
                <div className="flex flex-1 flex-col text-center justify-center">
                    <h1 className="font-bold text-4xl py-4">ETF Calculator!</h1>
                    <p className="font-semibold">Calculate your total return based on your ETF portfolio.</p>
                    <div className="p-8">
                        <ul className="font-semibold flex flex-row p-6 justify-around">
                            <li className="text-2xl flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="mx-2">Interactive Graph</span>
                            </li>
                            <li className="text-2xl flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="mx-2">Multiple ETFs</span>
                            </li>
                        </ul>
                        <ul className="font-semibold flex flex-row p-6 justify-around">
                            <li className="text-2xl flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="mx-2">Average Return</span>
                            </li>
                            <li className="text-2xl flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="mx-2">Historical Data</span>
                            </li>
                        </ul>
                        <ul className="font-semibold flex flex-row p-6 justify-around">
                            <li className="text-2xl flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="mx-2">Income Calculation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex flex-col p-8">
            <div className="flex flex-col items-center p-10 bg-purple-200 rounded-3xl">
                <h1 className="font-bold text-4xl py-4">Road to Financial Freedom</h1>
                <p className="text-2xl">Sign up today to get more out of the app.</p>
                <button className="py-5 px-10 bg-purple-950 text-white my-10 rounded-full shadow-lg shadow-indigo-500/50">Sign up</button>
            </div>
        </section>
        <section className="flex flex-col py-5 px-10">
            <p>Commissions, fees and expenses may be associated with investment funds. Read a fund’s prospectus or offering memorandum and speak to an advisor before investing.  Funds are not guaranteed, their values change frequently and investors may experience a gain or loss.  Past performance may not be repeated.
                Read our privacy policy.  By using or logging in to this website, you consent to the use of cookies as described in our privacy policy.
                Mutual funds and ETFs displayed are only qualified for sale in the provinces and territories of Canada and United.
                88747-v2023619</p>
        </section>
    </main>)
}