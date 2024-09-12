import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'
import { Layout } from './features/Layout/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
