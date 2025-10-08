import * as React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const Header = (children) => {
  const location = useLocation()
  const isRoot = location.pathname === "/" // トップページ判定
  if (isRoot) {
return (
  <header className="fixed w-full bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/40 shadow-sm z-50">
    <nav className="flex justify-center space-x-8 py-4 text-sm font-semibold">
      <a href="#kindles" className="hover:text-blue-500 transition">
        Kindles
      </a>
      <a href="#projects" className="hover:text-blue-500 transition">
        Projects
      </a>
      <a href="#contact" className="hover:text-blue-500 transition">
        Contact
      </a>
      <Link to="/distribution" className="hover:text-blue-500 transition">配布物</Link>
    </nav>
  </header>
)}
else{
return (
  <header className="fixed w-full bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/40 shadow-sm z-50">
    <nav className="flex justify-center space-x-8 py-4 text-sm font-semibold">
      <Link to="/" className="hover:text-blue-500 transition">トップページへ</Link>
      <Link to="/distribution" className="hover:text-blue-500 transition">配布物</Link>
    </nav>
  </header>
)}}

export default Header
