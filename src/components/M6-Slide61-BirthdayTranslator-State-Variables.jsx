import { useState } from "react";

const phrases = new Map([
  ['english', 'Happy Birthday'],
  ['german', 'Alles Gute zum Geburtstag'],
  ['spanish', 'Feliz Cumpleaños']
]);
function BirthdayTranslator() {
  
  const [currentLanguage, setCurrentLanguage] = useState('english');
  //const [phrase, setPhrase] = useState(phrases.get('english'))

  const handleChangeLanguage = (lang) => {
    setCurrentLanguage(lang);
    //setPhrase(phrases.get(lang));
  }

  const [currentPhrase, setCurrentPhrase] = useState(
    {lang: 'english', phrase: 'Happy Birthday'}
  )

  const handleChangeLanguage1 = (newlang) => {
    setCurrentPhrase({lang: newlang, phrase: phrases.get(newlang)})
  }

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>{phrases.get(currentLanguage)}! ({currentLanguage})</h3>

     { /* <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3> */ }

      <button onClick={() =>
        handleChangeLanguage('english')}>English</button>
      <button onClick={() =>
        handleChangeLanguage('german')}>German</button>
      <button onClick={() =>
        handleChangeLanguage('spanish')}>Spanish</button>
    </div>
  )
}

export default BirthdayTranslator;