import React, { useEffect, useRef,useContext } from 'react'
import HomeSlider from './Slider'
import CatSlider from '../../Components/CatSlider'
import Banner from '../../Components/Banner'
import './index.css'
import Products from '../../Components/Products/Index'
import Banner2 from '../../assests/images/sidebanner.png'
import Slider from 'react-slick'
import TopProducts from './TopProduct'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { MyContext } from '../../App';
const Home = (props) => {
  const context=useContext(MyContext);
  var settings = {
    dots: false,
    infinite: context.windowwidth<992? false:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade:false,
    arrows:context.windowwidth>992? true:false,
   
  };
  const [prodData, setprodData] = useState(props.data)
  const [catArray, setcatArray] = useState([])
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [ActiveTabData, setActiveTabData] = useState([]);

  const [popularproduct,setPopularProduct]=useState([]);
  const [isLodingProducts,setIsLodingProducts]=useState(false);

  const productRow=useRef();
  const best=[];
  useEffect(()=>{
    prodData.length!==0&&
    prodData.map((item)=>{
      if(item.cat_name==='Electronics')
      {
        item.items.length!==0&&
        item.items.map((item_)=>{
          item_.products.map((product,index)=>{

            best.push(product);

          })
        })
      }
    })

    setPopularProduct(best);
  
  },[])



 
  const catArr=[];

  const setitems=(item,index)=>{
    
    setactiveTabIndex(index)
    setactiveTab(item);

  }
 
  useEffect(()=>{
    prodData.length!==0&&
      prodData.map((item)=>{
        item.items.map((item_)=>{
              catArr.push(item_.cat_name)
          })
       })
       const list=catArr.filter((item,index)=>catArr.indexOf(item)===index);
         setcatArray(list);
         setactiveTab(list[0]);
         window.scrollTo(0, 0);
       
  },[])


  useEffect(() => {
    var arr = [];
    setActiveTabData(arr);
    prodData.length !== 0 &&
        prodData.map((item, index) => {
            item.items.map((item_, index_) => {
                if (item_.cat_name === activeTab) {
                    {
                        item_.products.length !== 0 &&
                            item_.products.map((product) => {
                                arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            })

                        setActiveTabData(arr)
                        setTimeout(()=>{

                          setIsLodingProducts(false);
                      
                        },[2000])
                       
                    }
                }
            })

        })

      
       
}, [activeTab, ActiveTabData])




  return (
   <div style={{display:'block'}}>
    <HomeSlider/>
    <CatSlider data={prodData}/>
    <Banner/> 
    <section className='homeProduct homewrapper'>
       <div className='container-fluid'>

              
             <div className='d-flex align-items-center homeProductTitleWrap'>
             <h5 className=' mb-0 mt-0 res-full '> Popular Products</h5>
             <ul className='list list-inline ml-auto filterTab  mb-0 res-full'>
               {
                catArray.length!==0&&
                catArray.map((item,index)=>{
                  return(
                    <li className='list list-inline-item'> 
                       <a  className={` text-capitalize fontsi ${activeTabIndex===index?'act':' '}`} onClick={
                        ()=>{setitems(item,index);  productRow.current.scrollLeft=0;setIsLodingProducts(true)}} >{item}</a>
                    </li>
                  )
                })
               }
                 
                  
              </ul>
             </div>
             
             <div className={`productRow  ${isLodingProducts===true && 'loading'}`} ref={productRow}>
                {
                
                  ActiveTabData.length!==0&&
                  ActiveTabData.map((item,index)=>{
                    return(
                           
                            <div className='item' key={index}> 
                                  <Products tag={item.type} item={item}/>
                                  
                            </div>
                    )
                    
                  })
               } 
             </div>
       </div> 
    </section>
    <section className='homeProduct homeProductsRow2 pt-0'>
       <div className='container-fluid'>

              
             <div className='d-flex align-items-center mb-3'>
             <h2 className='hd mb-0 mt-0 '> Best Sells</h2>
           
             </div>
             
             <br className='res-hide' />
             <div className='row'>
              <div className='col-sm-3'>
                <img src={Banner2} className='w-100 h-70 res-hide'/>
              </div>
              <div className='col-sm-9 bestsells'>
                  <Slider {...settings} className='proSlider'>

                 {
                  popularproduct.length!==0&&
                  popularproduct.map((item,index)=>{
                    return(
                           
                           
                                  <Products tag={item.type} item={item}/>
                                  
                          
                         )
                    
                  })
               } 
                 </Slider>  
               </div>
             </div>
       </div> 
    </section>
     
     <section className='topProduct'>
       
       <div className='container-fluid'>
           <div className='row'>
             <div className='col'>
                   <TopProducts title="Maximum Selling"/>
             </div>
             <div className='col'>  
                   <TopProducts title="Trending Products"/>
             </div>
             <div className='col'>                
                   <TopProducts title="Newly Added"/>           
             </div>
             <div className='col'>     
                    <TopProducts title="Highly Rated"/>
             </div> 
           </div>
       </div>

     </section>

     

   
   </div>
   
  )
}

export default Home