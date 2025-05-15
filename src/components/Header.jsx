import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <header className={`sticky top-0 z-50 ${isOpen ? "" : "shadow-md"} transition duration-200 ease-in-out`}>
    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">2025 Military Heroes Gala</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
        <Link to="/" className="hover:scale-110 hover:text-wu_blue3 text-wu_blue2 dark:hover:text-wu_blue5 dark:text-wu_blue4 transition duration-400 ease-in-out">
            Home
        </Link>
        <Link to="/event" className="hover:scale-110 hover:text-wu_blue3 text-wu_blue2 dark:hover:text-wu_blue5 dark:text-wu_blue4 transition duration-400 ease-in-out">
            Event
        </Link>
        <Link to="/donate" className="hover:scale-110 hover:text-wu_blue3 text-wu_blue2 dark:hover:text-wu_blue5 dark:text-wu_blue4 transition duration-400 ease-in-out">
            Donate
        </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
        className={`
        md:hidden 
        transition duration-200 ease-in-out ${isOpen ? 'rotate-90' : 'scale-100'}
        focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
    </div>
    </header>
    {/* Mobile Dropdown */}
    <div
        className={`md:hidden sticky top-0 z-50 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
    >
        <nav className="px-4 pb-4 flex flex-col gap-2">
            <Link  to="/" onClick={() => setIsOpen(false)} className="hover:scale-110 hover:text-wu_blue3 text-wu_blue2 dark:hover:text-wu_blue5 dark:text-wu_blue4 transition duration-400 ease-in-out">Home</Link>
            <Link to="/event" onClick={() => setIsOpen(false)} className="hover:scale-110 hover:text-wu_blue3 text-wu_blue2 dark:hover:text-wu_blue5 dark:text-wu_blue4 transition duration-400 ease-in-out">Event</Link>
            <Link to="/donate" onClick={() => setIsOpen(false)} className="hover:scale-110 hover:text-wu_blue3 text-wu_blue2 dark:hover:text-wu_blue5 dark:text-wu_blue4 transition duration-400 ease-in-out">Donate</Link>
        </nav>
    </div>
    </>
  )
}
