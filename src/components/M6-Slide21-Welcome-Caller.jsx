import Welcome from "./M6-Slide21-Welcome";
import viteLogo from '/vite.svg'

function WelcomeCaller() {
  
    return(
      <>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Welcome name="david" tel="34543">
          <p>Children of Welcome from Caller</p>
          <p>It is 2nd child</p>
        </Welcome>
      </>
    )

}

export default WelcomeCaller