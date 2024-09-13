import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { HomePage } from './pages/HomePage/HomePage'
import { Layout } from './features/Layout/Layout'
import { CartPage } from './pages/CartPage/CartPage'
import { store } from './store/store'
import { OrderFormPage } from './pages/OrderFormPage/OrderFormPage'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='order' element={<OrderFormPage />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
