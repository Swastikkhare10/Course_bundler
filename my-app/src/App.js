import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './components/Home/Home'
import Header from './components/Layout/Header'
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer'
import Login from './components/Auth/login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';


function App() {

  window.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
  })

  return ( 
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:id' element={<CoursePage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
      <Route path='/changepassword' element={<ChangePassword />} />
      <Route path='/updateprofile' element={<UpdateProfile />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/request' element={<Request />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/resetpassword/:token' element={<ResetPassword />} />
      <Route path='/subscribe' element={<Subscribe />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/paymentsuccess' element={<PaymentSuccess />} />
      <Route path='/paymentfail' element={<PaymentFail />} />
      {/* Admin Routes */}
      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/admin/createcourse' element={<CreateCourse />} />
      <Route path='/admin/courses' element={<AdminCourses />} />
      <Route path='/admin/users' element={<Users />} />
    </Routes>

    <Footer />
  </Router>
  );
}

export default App;
