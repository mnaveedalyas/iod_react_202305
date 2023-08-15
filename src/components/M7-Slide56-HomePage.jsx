
import { Link } from 'react-router-dom'

export default function Homepage() { // Save in pages/Homepage.jsx
  
  return (
    <div className="Homepage">
      <h1>Home Page</h1>

      <p>
        <Link to="/dash">Dashboard ---- </Link>
      </p>
      <p>
        <Link to="/about">About --- </Link>
      </p>

    </div>
  )

}

