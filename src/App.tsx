import { Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes></Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
