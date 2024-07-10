import './styles/App.css'
import About from './components/About.jsx'
import Header from './components/Header.jsx'
import Projects from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {

  return (
    <>
     <Header/>
     <main>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
     </main>
     <ScrollToTop/>
     <Footer/>
    </>
  )
}

export default App
