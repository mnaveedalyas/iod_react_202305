import { useState } from "react";

function Explod() {
  throw new Error('💥 KABOOM 💥')
}

function ExplodingError() {
  const [exploded, setExploded] = useState(false)
  return (
    <div className="ExplodingBomb componentBox">
      <button onClick={() => setExploded(!exploded) }>
      DANGER: Click to explode bomb!</button>
      {/* Renders the Bomb conditionally, depending on state */}
      {exploded ? <Explod /> : null}
    </div>
  )
}
export default ExplodingError;