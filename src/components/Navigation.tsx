import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[60px] px-5 shadow-md bg-gray-700 text-white">
      GitHub Searcher
      <span>
        <Link to="home">Home Page</Link>
      </span>
    </nav>
  )
}

export default Navigation