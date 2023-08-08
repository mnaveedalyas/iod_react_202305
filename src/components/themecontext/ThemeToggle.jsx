import { useCurrrentTheme } from './ThemeContext'

function ThemeToggle (){

    const {handleToggleTheme} = useCurrrentTheme();
    //console.log('toggleTheme :'+ toggleTheme);
    //const {currentUser, handleUpdateUser} = useUserContext();

    return (
      <button onClick={handleToggleTheme}>Toggle the Theme</button>
    );
  
}

export default  ThemeToggle;