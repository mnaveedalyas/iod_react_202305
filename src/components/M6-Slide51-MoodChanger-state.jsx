// useState is a React hook
import { useState } from "react";
// save in MoodChanger.jsx
function MoodChanger() {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState('happy');
  const [name, setName] = useState('Naveed');

  return (
    <div>
    <div className="MoodChanger componentBox">
      Current Mood: {name} -- {mood}
    </div>

    <button
      onClick={() => setMood('tired')}>
      Stay Up Late
    </button>

    <button
      onClick={() => setMood('hungry')}>
      Skip Lunch
    </button>

    <button
      onClick={() => setName('ABC')}>
      Change Name
    </button>

    </div>

  
  )
}
export default MoodChanger;