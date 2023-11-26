import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home, Cart, Layout} from './pages'
import { Provider } from "react-redux"
import store from "./store/store"


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="" element={<Home/>}></Route>
              <Route path="cart" element={<Cart/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
