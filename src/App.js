import logo from './logo.svg';
import './App.css';

 import Login from './component/login';
import Home from './component/home';
import Products from './component/products';
import Nav from './component/navbar';
import Cart from './component/cart';


import { Routes,Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import{additem,deleteitem} from './features/cart'
function App() {
  const k=useSelector((s)=>s.Auth.value)
  console.log(additem,deleteitem)
  return (
    <>
    <Routes>
<Route path='/' element={<Nav />}>
<Route index element={k?<Home />:<Login/>} />
<Route path='/login' element={<Login />}/>
<Route path='/cart' element={k?<Cart />:<Login/>}/>
<Route path='/product/:id' element={k?<Products />:<Login/>}/>
  

</Route>


    </Routes>
    
    </>
  );
}

export default App;
