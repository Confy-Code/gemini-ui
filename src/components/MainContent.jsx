import Suggestions from './Suggestions'
import data from '../assets/data'

export default function MainContent(){
  const suggestions = data.map((dt, index) => (<Suggestions key={index} option={dt.option} icon={dt.icon}/>))

  return (
      <main>
        <h1 className="home-title">Where should we start?</h1>
        <div>
          <div className="prompt-handler">
            <div className="left-side">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://w3.org">
                <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"/>
              </svg>
              
              <span className="prompt-ask">Ask Gemini</span>
            </div>

            <div className="right-side">
              <section>
                <span className="prompt-text">Gemini <span>Auto</span></span>
                <img className="down_arrow" src="./src/assets/down_arrow.svg"></img>
              </section>
            </div>
          </div>
        </div>

        <div className="suggestions">
          {suggestions}
        </div>

      </main>
  )
}