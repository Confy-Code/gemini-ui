import { createRoot } from "react-dom/client"
import Header from './components/Header'
import MainContent from './components/MainContent'

const root_element = document.getElementById("root")

createRoot(root_element).render(
  <>
    <Header />
    <MainContent />
  </>
)