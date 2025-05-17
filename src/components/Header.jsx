import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(64); // default 64px

    useEffect(() => {
    if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
    }
    }, [isOpen]);


  const generateLinks = (names) => {
    return (
       names.map((text) => (
            <Link
            key={text}
            to={`/${text === 'Home' ? '' : text.toLowerCase()}`}
            className="hover:scale-105 hover:text-KS_gold-001 text-KS_gold transition duration-200 ease-in-out"
            >
            {text}
            </Link>
        ))
    )
  }

  return (
    <>
      <header ref={headerRef} className={`sticky top-0 z-50 bg-KS_green text-neutral-100 ${isOpen ? '' : 'shadow-md'} transition duration-200 ease-in-out`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="hover:scale-105 flex items-center space-x-3 transition duration-200 ease-in-out">
            <img src="/ks-crest.png" alt="Kappa Sigma Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold">2025 Military Heroes Gala</h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            {generateLinks(['Home', 'Event', 'Donate', 'About'])}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden transition duration-200 ease-in-out ${isOpen ? 'rotate-90' : 'scale-100'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed left-0 w-full z-40 transition-all duration-300 ease-in-out origin-top transform ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        } bg-neutral-200 dark:bg-neutral-800 shadow-2xl`}
        style={{ transformOrigin: 'top', top: `${headerHeight}px` }}
      >
        <nav className="flex flex-col gap-4 text-center py-4 text-KS_gold">
          {generateLinks(['Home', 'Event', 'Donate', 'About'])}
        </nav>
      </div>
    </>
  )
}
