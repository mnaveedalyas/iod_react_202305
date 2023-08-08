import { useCurrrentTheme } from './ThemeContext'

export default function BookList() {
  
  const { currentTheme } = useCurrrentTheme();
  const theme = currentTheme.isLightTheme? currentTheme.light: currentTheme.dark;

    return (
      <div className='book-list' style={{ color:theme.syntax, background: theme.bg}}>
        <ul>
            <li style={ {background: theme.ui}}>Software Engineering</li>
            <li style={ {background: theme.ui}}>React Programming</li>
            <li style={ {background: theme.ui}}>Business Analysis</li>
        </ul>
      </div>
    )
}
