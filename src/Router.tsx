import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Cart } from './pages/Cart/index'
import { Success } from './pages/Success/index'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
