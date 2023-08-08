
import { useCurrrentTheme } from './ThemeContext'


export default function NavBar() {
    
    const { currentTheme } = useCurrrentTheme();
    
    //console.log('currentTheme inside NavBar :', JSON.stringify(currentTheme));

    const theme = currentTheme.isLightTheme? currentTheme.light: currentTheme.dark;
        
    return (
        <nav style={ {background: theme.ui, color: theme.syntax} }>
            <h1>My Application</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
