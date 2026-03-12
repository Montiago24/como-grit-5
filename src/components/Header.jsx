import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "flag-icons/css/flag-icons.min.css"
import Logo from "../assets/Logo.png"

const flags = {
  en: "gb",
  hr: "hr",
  de: "de"
}

const languages = {
  en: "English",
  hr: "Hrvatski",
  de: "Deutsch"
}

const navLabels = {
  en: { home: "Home", about: "About Us", services: "Services", gallery: "Gallery", contact: "Contact Us", construction: "Building Construction" },
  de: { home: "Startseite", about: "Über uns", services: "Dienstleistungen", gallery: "Galerie", contact: "Kontakt", construction: "Hochbau" },
  hr: { home: "Početna", about: "O nama", services: "Usluge", gallery: "Galerija", contact: "Kontakt", construction: "Izgradnja Zgrada" }
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Extract current language from URL
  const pathParts = location.pathname.split('/')
  const currentLang = pathParts[1] && ['en', 'de', 'hr'].includes(pathParts[1]) ? pathParts[1] : 'en'

  // Extract current page from URL
  const currentPage = pathParts[2] ? `/${pathParts[2]}` : '/'

  const navLinks = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/services", label: "services" },
    { path: "/gallery", label: "gallery" },
    { path: "/contact", label: "contact" },
    { path: "/construction", label: "construction" }
  ]

  const changeLanguage = (lang) => {
    const newPath = `/${lang}${currentPage === '/' ? '' : currentPage}`
    navigate(newPath)
    setMobileMenuOpen(false)
  }

  const getNavLink = (path) => {
    if (path === '/') {
      return `/${currentLang}`
    }
    return `/${currentLang}${path}`
  }

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to={`/${currentLang}`} className="flex items-center">
            <img
              src={Logo}
              alt="COMO GRIT Logo"
              className="w-44 md:w-48 h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => {
              const isConstruction = link.path === "/construction"
              const navLink = getNavLink(link.path)

              return (
                <Link
                  key={link.path}
                  to={navLink}
                  className={`font-semibold transition-all px-3 py-1 rounded
                  ${
                    isConstruction
                      ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {navLabels[currentLang][link.label]}
                </Link>
              )
            })}

            {/* Language Dropdown */}
            <div className="relative group">
              <button className="w-36 px-3 py-1 border rounded border-slate-300 hover:border-blue-600 font-semibold flex items-center justify-between gap-2 transition-colors">
                <div className="flex items-center gap-2">
                  <span className={`fi fi-${flags[currentLang]} w-5 h-5 rounded-sm overflow-hidden`} />
                  {languages[currentLang]}
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              <div className="absolute right-0 mt-2 w-full bg-white border border-slate-300 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-3 transition-colors"
                  >
                    <span className={`fi fi-${flags[code]} w-5 h-5 rounded-sm overflow-hidden`} />
                    {name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-slate-200 py-4 shadow-md">
            <div className="flex flex-col gap-4 px-6">

              {navLinks.map((link) => {
                const isConstruction = link.path === "/construction"
                const navLink = getNavLink(link.path)

                return (
                  <Link
                    key={link.path}
                    to={navLink}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-left font-semibold py-2 transition-all rounded px-2
                    ${
                      isConstruction
                        ? "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {navLabels[currentLang][link.label]}
                  </Link>
                )
              })}

              {/* Mobile Language Switch */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      changeLanguage(code)
                      setMobileMenuOpen(false)
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      currentLang === code
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <span className={`fi fi-${flags[code]} w-5 h-5 rounded-sm overflow-hidden`} />
                    {name}
                  </button>
                ))}
              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  )
}