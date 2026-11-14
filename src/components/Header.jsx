export default function Header(){
  return(
    <header>
      <nav>
        <i className="fa-solid fa-shield"></i>
        <div className="nav-list">
          <div className="nav-list-item-1">
            <img src="./src/assets/download_icon.svg" alt="download icon"></img>
            <span>Get app</span>
          </div>
          <div className="nav-list-item-2">
            <img className="nav-list-item-img" src="./src/assets/gemini_logo.webp"></img>
            <span>Upgrade</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
