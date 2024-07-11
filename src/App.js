
import './App.css';
import './responsive.css';
import{Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/index'
// import About from './Pages/About';
import Listing from './Components/Listing';
import Footer from './Components/Footer/Footer';
import NotFound from './Pages/Notfound';
import DetailPage from './Pages/Details';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Signup from './Pages/Signup';
import SignIn from './Pages/SignIn';
import Cart from './Pages/Cart';
import toast, { Toaster } from 'react-hot-toast';
const MyContext=createContext();




function App() {
  const [productdata,setProductData]=useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLogin,setIsLogin]=useState();
  const [windowwidth,setwindowwidth]=useState(window.innerWidth);

 const [isOpenFilters,setIsOpenFilters]=useState(false);

 
  useEffect(()=>{
    //  getData('http://localhost:5000/productData');
    getData('/db.json');
    // getCartData(" http://localhost:5000/cartSelect");

    const isLogin=localStorage.getItem('isLogin');
    setIsLogin(isLogin);
   
  },[])

  const getData=async(url)=>{
      
       try{
            await axios.get(url).then((response)=>{
              setProductData(response.data['productData']);
            })

       }
       catch(error)
       {
        console.log(error.message);
       }
          
  }


//   const getCartData=async(url)=>{
//     try {
//         await axios.get(url).then((response) => {
          
//             setCartItems(response.data);
          
//         })
//       } catch (error) {
//         console.log(error)
//       }
// }
  // const addtocart = async (item) => {
  //       item.quantity = 1;

  //       try {
  //         await axios.post("http://localhost:5000/cartSelect", item).then((response) => {
  //           if (response !== undefined) {
  //             setCartItems(item);
  //           }
  //         })
  //       } catch (error) {
  //         console.log(error)
  //       }

  //   }
    // const removeItemsFromCart = (id) => {
    //   const arr = cartItems.filter((obj) => obj.id !== id);
    //   setCartItems(arr)
    // }
  
   
    // const emptyCart = () => {
    //   setCartItems([]);
    // }
  
   
    const signOut=()=>{
      localStorage.removeItem('isLogin');
      setIsLogin(false);
    }

    const signIn=()=>{
      
        const isLogin=localStorage.getItem('isLogin');
        setIsLogin(isLogin);
   
    }
    const openfilter=()=>{
      setIsOpenFilters(!isOpenFilters);
    }
          
          const value ={
           
            // addtocart,
            cartItems,
            // removeItemsFromCart,
            // emptyCart,
            isLogin,
            signOut,
            signIn,
            isOpenFilters,
            windowwidth,
            openfilter
            
          
          }
        

  return (

    productdata.length!==0&&
    // <BrowserRouter>
    <MyContext.Provider value={value}>
          <Header data={productdata} /> 
          <Routes>
          <Route path="/" element={<Home data={productdata}/>}></Route>
          <Route  exact={true} path="/cat/:id" element={<Listing data={productdata} single={true}/>}></Route>
          <Route exact={true} path="/cat/:id/:id" element={<Listing  data={productdata} single={false}/>}></Route>
          <Route exact={true} path="/product/:id" element={<DetailPage data={productdata}/>}></Route>
          
          <Route exact={true} path="/cart" element={<Cart data={productdata}/>}></Route>

         <Route exact={true} path="/signUp" element={<Signup/>}> </Route>
          <Route exact={true} path="/signIn" element={<SignIn/>}> </Route> 
           <Route path="*" element={<NotFound/>}></Route> 
          
         </Routes> 
         <Toaster />
         <br></br>
          <Footer/>  

      </MyContext.Provider>
    // </BrowserRouter>
  );
}

export default App;
export {MyContext};
