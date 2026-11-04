import { createRoot } from "react-dom/client"

const root_element = document.getElementById("root")

function Header(){
  return(
    <header>
      <nav>
        <i className="fa-solid fa-shield"></i>
        <ul className="nav-list">
          <li className="nav-list-item">Get app</li>
          <li className="nav-list-item">Upgrade</li>
        </ul>
      </nav>
    </header>
  )
}


function MainContent(){
  return (
      <main>
        <h1 className="home-title">Where should we start?</h1>
        <div>
          <ul className="prompt-handler">
            <li>Ask Gemini</li>
            <li>Gemini Auto</li>
          </ul>
        </div>
      </main>
  )
}

createRoot(root_element).render(
  <>
    <Header />
    <MainContent />
  </>
)