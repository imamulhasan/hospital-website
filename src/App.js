import './App.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/HomePage/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Success from './components/Success/Success';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import Services from './components/Services/Services';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
       <Header></Header>
       <Switch>
         <Route exact path="/" >
            <Home></Home>
         </Route>
         <Route  path="/home" >
            <Home></Home>
         </Route>
         <Route  path="/about" >
           <About></About>
         </Route>
         <PrivateRoute  path="/detail/:id" >
            <Detail></Detail>
         </PrivateRoute>
         <PrivateRoute  path="/success" >
            <Success></Success>
         </PrivateRoute>
         <Route  path="/doctors" >
            <Doctors></Doctors>
         </Route>
         <Route  path="/services" >
            <Services></Services>
         </Route>
         <PrivateRoute  path="/servicedetail/:id" >
            <ServiceDetail></ServiceDetail>
         </PrivateRoute>
         <Route  path="/login" >
            <Login></Login>
         </Route>
         <Route  path="/signup" >
            <SignUp></SignUp>
         </Route>
         <Route  path="*" >
            <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
