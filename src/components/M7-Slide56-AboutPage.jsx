import { Link } from 'react-router-dom'

export default function AboutPage() { // Save in pages/AboutPage.jsx
  return (
    <div className="About">
      <h1>About Us</h1>
      <p>
        <Link to="/">Home Page</Link>
      </p>
    </div>
  )
}
// ++ Update imports in AppRoutes.jsx to include these new files