import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h2>Sorry</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/projects">Go back to projects</Link>
    </div>
  )
}

export default NotFound