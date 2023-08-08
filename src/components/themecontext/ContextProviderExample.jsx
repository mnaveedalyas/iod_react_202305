import BookList from './BookList'
import { ThemeProvider } from './ThemeContext'
import NavBar from './NavBar'
import ThemeToggle from './ThemeToggle'

export default function ContextProviderExample() {
  return (
    <div>
        <ThemeProvider>
            <NavBar />
            <BookList />
            <ThemeToggle />
        </ThemeProvider>

    </div>
  )
}
