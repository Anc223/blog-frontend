import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/User/Home'
import Login from './components/User/login';
import Category from './components/User/Category';
import Signup from './components/User/signup';
import Adlogin from './components/Admin/Adlogin';
import Adashbrd from './components/Admin/Adashbrd';
import Adnav from './components/Admin/Adnav';
import Adusers from './components/Admin/Adusers';
import Home2 from './components/User/Home2';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home3 from './components/User/Home3';
import Home4 from './components/User/Home4';
import Home5 from './components/User/Home5';
import DashboardCard from './components/Admin/DashboardCard';
import Setting from './components/Admin/Setting';
import Forgetpswd from './components/User/Forgetpswd';
import Editprof from './components/User/Editprof';
import Navig from './components/User/Navig';
import Homenw1 from './components/User/Homenw1';
import Caro from './components/User/Caro';
import Viewprofile from './components/User/Viewprofile';
import Aboutus from './components/User/Aboutus';
import Contactus from './components/User/Contactus';
import Category2 from './components/User/Category2';
import Addblogs from './components/User/Addblogs';
import Catg3 from './components/User/Catg3';
import Blogpost from './components/User/Blogpost';
import Viewblog from './components/Admin/Viewblog';
import Logoutt from './components/User/Logoutt';
import Blogview from './components/User/Blogview';
import Homenw2 from './components/User/Homenw2';
import Viewusr from './components/Admin/Viewusr';
import Deleteusr from './components/Admin/Deleteusr';
import Editblog from './components/User/Editblog';
import Blogpostview from './components/Admin/Blogpostview';
import Deleteblog from './components/User/Deleteblog';
import Myblog from './components/User/Myblog';
import Myblog2 from './components/User/Myblog2';
import CategoryPage from './components/User/CategoryPage';


function App() {
  return (
  <div>

    <BrowserRouter>
    
    <Routes>
       <Route path='/' element={[<Home/>,<Home2/>,<Home3/>,<Home4/>,<Home5/>]} />
       <Route path='/signup' element={<Signup/>} />
       <Route path='/login' element={[<Login/>]} />
       <Route path='/Home' element={[<Navig/>,<Homenw1/>,<Homenw2/>,< Caro/>,<Aboutus/>,<Contactus/>]} />
       <Route path='/Forgetpswd' element={<Forgetpswd/>} />
       <Route path='/Addblogs' element={[<Navig/>,<Addblogs/>]} />
       <Route path='/Category' element={[<Category/>,<Category2/>,<Catg3/>]} />
       <Route path='/Category-Page/:name' element={<CategoryPage/>}/>
       <Route path='/Editprof/:id' element={[<Navig/>,<Editprof/>]} />
       <Route path='/Viewprofile' element={[<Navig/>,<Viewprofile/>]} />
       <Route path='/Blogs' element={[<Navig/>,<Blogpost/>,<Aboutus/>,<Contactus/>]} />
       <Route path='/viewblogs/:id' element={<Blogview/>} />
       <Route path='/logout' element={<Logoutt/>} />
       <Route path='/editblog/:id' element={[<Navig/>,<Editblog/>]} />
       <Route path='/myblogs' element={[<Navig/>,<Myblog/>]} />
       <Route path='/viewmyblogs/:id' element={[<Navig/>,<Myblog2/>]} />

       
       <Route path='/Dashboard' element={[<Adnav/>,<Adashbrd/>,<DashboardCard/>]} />
       <Route path='/Admin' element={<Adlogin/>} />
       <Route path='/Users' element={[<Adnav/>,<Adusers/>]} />
       <Route path='/viewblog' element={[<Adnav/>,<Viewblog/>]} />
       <Route path='/blogpost/:id' element={[<Adnav/>,<Blogpostview/>]} />
       <Route path='/deleteblog/:id' element={<Deleteblog/>} />
       <Route path='/viewuserbyid/:id' element={[<Adnav/>,<Viewusr/>]} />
       <Route path='/deleteuser/:id' element={<Deleteusr/>} />
       <Route path='/Setting' element={<Setting/>} />





       </Routes>
    </BrowserRouter>
    
  </div> 
  );
}

export default App;
