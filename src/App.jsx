import './App.css'
import { Header } from './components/Header'
import { Company } from './components/Company'
import { Stands } from './components/Stands'
import { Sites } from './components/Sites'
import { Footer } from './components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Company/>
      <Stands/>
      <Sites/>
      <Footer/>
    </div>
  )
}

export default App
