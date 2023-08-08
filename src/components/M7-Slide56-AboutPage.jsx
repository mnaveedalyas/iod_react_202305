import { Link } from 'react-router-dom'

export default function AboutPage() { // Save in pages/AboutPage.jsx
  return (
    <div className="About">
      <h1>About</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}
// ++ Update imports in AppRoutes.jsx to include these new files