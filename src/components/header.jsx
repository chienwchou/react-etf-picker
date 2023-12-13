
export default function Header() {
    return (
        <header className="lg:px-8 py-6">
            <nav className="flex items-center">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a className="flex items-center gap-x-1 text-sm font-semibold">
                        ETF Lists
                        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="text-sm font-semibold">Calculator</a>
                    <a href="#" className="text-sm font-semibold">Advanced Features</a>
                    <a href="#" className="text-sm font-semibold">Take a quiz</a>
                    <a href="#" className="text-sm font-semibold">How ETF works</a>
                </div>
                <div className="flex justify-end lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 font-semibold">Log in</a>
                </div>
            </nav>
        </header>
    )
}