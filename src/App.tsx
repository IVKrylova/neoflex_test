import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'
import { Layout } from './features/Layout/Layout'
import { CartPage } from './pages/CartPage/CartPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='cart' element={<CartPage />} />
      </Route>
    </Routes>
  )
}

export default App
