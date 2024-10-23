//import EditDish from "./component/Sale/EditDish/EditDish"
import LoginForm from "./component/Auth/component/LoginForm"
import RegisterChoice from "./component/Auth/component/RegisterChoice"
import RegisterSale from "./component/Auth/component/RegisterSale"
import RegisterUser from "./component/Auth/component/RegisterUser"
import Auth from "./component/Auth/pages/Auth"
import HomeSale from "./component/Sale/HomeSale/pages/HomeSale"
import DishPage from "./component/User/Dish/pages/DishPage"
import HomeUser from "./component/User/HomeUser/pages/HomeUser"
import LayoutUser from "./component/User/Layout/LayoutUser"
import CartPage from "./component/User/ShoppingCart/pages/CartPage"
import StorePage from "./component/User/StoreDetails/pages/StorePage"
import StorePlace from "./component/User/StorePlace/StorePlace"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Protected from "./component/Auth/context/ProtectedRoute"
import OrderPage from "./component/Sale/OrderSale/pages/OrderPage"
import Notification from "./component/Notification/Notification"
import LayoutSale from "./component/Sale/Layout/LayoutSale"
import SearchPage from "./component/User/Search/pages/SearchPage"

function App() {
  return (
    <div> 
      <Router>
        <Routes>
            <Route path="/home" exact element={<LayoutUser><HomeUser/></LayoutUser>}/>
            <Route path="/home/store/:id" exact element={<LayoutUser><StorePage/></LayoutUser>}/>
            <Route path="/cart" exact element={<Protected><LayoutUser><CartPage/></LayoutUser></Protected>}/>
            <Route path="/place" exact element={<LayoutUser><StorePlace/></LayoutUser>}/>
            <Route path="search/:key/:category" exact element={<LayoutUser><SearchPage/></LayoutUser>}/>
            <Route path="/home/dish/:id" exact element={<LayoutUser><DishPage/></LayoutUser>}/>
            <Route path="/sale/order" exact element={<Protected><LayoutSale><OrderPage/></LayoutSale></Protected>}/>
            <Route path="/sale/notification" exact element={<Notification/>}/>
            <Route path="/" element={<Auth/>}>
              <Route path="/login" element={<LoginForm/>}/>
              <Route path="/register" element={<RegisterChoice/>}/>
              <Route path="/register/user" element={<RegisterUser/>}/>
              <Route path="/register/sale" element={<RegisterSale/>}/>
            </Route>
            <Route path="/sale/home" exact element={<Protected><LayoutSale><HomeSale/></LayoutSale></Protected>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
