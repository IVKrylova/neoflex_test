import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { HomePage } from './pages/HomePage/HomePage'
import { Layout } from './features/Layout/Layout'
import { CartPage } from './pages/CartPage/CartPage'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
