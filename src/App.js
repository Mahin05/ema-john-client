import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import PurchasePage from './Pages/Home/PurchasePage/PurchasePage';
import Login from './Pages/Home/Login/Login/Login';
import SignUp from './Pages/Home/Login/SignUp/Signup';
import RequireAuth from './Pages/Home/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard'
import Review from './Pages/Dashboard/Review';
import Profile from './Pages/Dashboard/Profile';
import MyOrders from './Pages/Dashboard/MyOrders';
import EditProfile from './Pages/Dashboard/EditProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Home/Login/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import Blogs from './Pages/Blogs/Blogs';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<Blogs></Blogs>}></Route>
        <Route path='purchase/:toolId' element={<RequireAuth>
          <PurchasePage></PurchasePage>
        </RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
