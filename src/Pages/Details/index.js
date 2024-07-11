import React, { useEffect } from "react";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { useState } from "react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// import Product1 from '../../assests/images/Product1.jpg'
import Slider from "react-slick";
import Products from "../../Components/Products/Index";
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from "bootstrap-4-react/lib/components";
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
 import Card1 from '../../assests/images/card1.jpeg'
import { useRef } from "react";
import axios from "axios";
// import Quantity from "../../Components/Quantity";
import { addToCart } from '../../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";

const DetailPage = (props) => {

  const dispatch=useDispatch();
  
  const send=(e)=>{
    
    // context.addtocart(productdata);

      dispatch(addToCart(e));
      toast.success("Item added In Your Cart")
   }
  const d = new Date();
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const [data,setData]=useState(props.data);
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:false,
    arrows:false,
   
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade:false,
    arrows:true,
   
  };
  var related = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade:false,
    arrows:true,
    autoplay:3000
  };
  const [zoomImage,setZoomImage]=useState('https://www.jiomart.com/images/product/original/490001537/nestle-milkmaid-condensed-milk-380-g-tin-product-images-o490001537-p490001537-0-202211151711.jpg?im=Resize=')
  const [smallImageSize,setSmallImageSize]=useState([150,150]);
  const [bigImageSize,setBigImageSize]=useState([420,420]);
  const [isValue,setIsValue]=useState(1);
  const zoomSlider=useRef();
  const zoomSliderBig=useRef();
  const [currentpro,setCurrentpro]=useState({});
  const [relatedproduct,setRelatedProduct]=useState([]);
 const [rating, setRating]=useState(0.0);
 let {id}=useParams();
 const [reviewArra,setReviewArra]=useState([]);
  const [procat,setProcat]=useState({
    parantcat:sessionStorage.getItem('parentCat'),
    subcat:sessionStorage.getItem('subCat')
  })

const [reviewfield,setReviewField]=useState({
  review:'',
  userName:'',
  rating:0.0,
  productId:0
})



const submitReview =async(e)=>{

      e.preventDefault();
      try{

          await axios.post("http://localhost:5000/productReviews",reviewfield).then((response)=>{
      
          setReviewField(()=>({
            review:'',
            userName:'',
            rating:0.0,
            productId:0
          }));
          })        
          
          
        


      }catch(error){
        console.log(error.message);
      }
    
      showReview();
}



const review_arr2=[];
const showReview=async()=>{

   try{
           await axios.get("http://localhost:5000/productReviews").then((response)=>{

             if(response.data.length!==0)
             {
                 response.data.map((item)=>{
                  if(parseInt(item.productId)===parseInt(id))
                  {
                    review_arr2.push(item);
                  }
                  
                 })
               
             }
             else{
                review_arr2=[];
             }
            
           })    
     
   }catch(error)
   {
    console.log(error.message);
   }
    
   if(review_arr2.length!==0)
   {
    setReviewArra(review_arr2);
   }
   else{
    setReviewArra([]);
   }
   
}

const inputreview=(name,value)=>{
  setReviewField(()=>({
    ...reviewfield,
    [name]:value,
    productId:id
    
      
  }))
}

  
  const imageno=(index)=>{
    
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  }
  const plus=()=>{
    setIsValue(isValue+1);
  }

  const minus=()=>{

    if(isValue!==0)
    setIsValue(isValue-1);
  }


  
  useEffect(() => {
    window.scrollTo(0, 0)

    props.data.length !== 0 &&
        props.data.map((item) => {
            item.items.length !== 0 &&
                item.items.map((item_) => {
                    item_.products.length !== 0 &&
                        item_.products.map((product) => {
                            if (parseInt(product.id) === parseInt(id)) {
                                setCurrentpro(product);
                            }
                        })
                })
        })




        const related_=[];
        
        data.length!==0&&
        data.map((item)=>{
         if(item.cat_name===procat.parantcat)
         {
             item.items.length!==0&&
             item.items.map((item_)=>{
               if(item_.cat_name===procat.subcat)
               {
                 item_.products.length!==0&&
                 item_.products.map((product,index)=>{
                  if(product.id!==parseInt(id))
                  {
                    related_.push(product);

                  }
                     
                 })
               }
             })
         }
        })
      
        if(related_.length!==0)
        {
          setRelatedProduct(related_);
        }
   
        showReview();
       
      },[id]);


  const [activeSize, setActiveSize]=useState(0);
  const isActive=(value)=>{
    setActiveSize(value);
  }
  const [activeTab,setActiveTab]=useState(0)

  return (
    <section className="detailsPage mb-5">
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2">
            <li><Link to="/">Home</Link></li>
            <li className="text-capitalize"><Link to={`/cat/${procat.parantcat.toLowerCase()}`} onClick={()=>sessionStorage.setItem('cat',procat.parantcat.toLowerCase())}>{procat.parantcat}</Link></li>
            <li className="text-capitalize"><Link to={`/cat/${procat.parantcat.toLowerCase()}/${procat.subcat.replace(/\s/g,'-'.toLowerCase())}`} onClick={()=>sessionStorage.setItem('cat',procat.parantcat.toLowerCase())}>{procat.subcat}</Link></li>
            <li>{currentpro.productName}</li>
           
          </ul>
        </div>
      </div>
      <div className="container detailscontainer pt-3 pb-3">
        <div className="row">
        

         <div className="col-md-5 ">
             <div className="productzoom " >
              <Slider {...settings2} ref={zoomSliderBig}>
                {
                   currentpro.productImages !== undefined &&
                   currentpro.productImages.map((imgurl,index)=>{
                         return(
                          <div className="item">
                          < InnerImageZoom src={`${imgurl}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`} zoomType="hover" zoomScale={1.3} />
            
                          </div>
                         )
                   })
                }

              
              </Slider>

             </div>

         <Slider {...settings} className='zoomSlider' ref={zoomSlider}>

         {
                   currentpro.productImages !== undefined &&
                   currentpro.productImages.map((imgurl,index)=>{
                         return(
                          <div className="item">
                                <img src={`${imgurl}?im=Resize=(${smallImageSize[0]},${smallImageSize[1]}) `} className="w-100" onClick={()=>imageno(index)}/>
                         </div >
                         )
                   })
                }

   </Slider>

          </div>

       <div className="col-md-7 productinfo">
     <h5> {currentpro.productName}</h5>
     <div className="d-flex align-items-center mb-4">

         <Rating name="half-rating-read" value={parseFloat(currentpro.rating)} precision={0.5} readOnly />
        <span className="text-light">(32 reviews)</span>

     </div>
     <div className=" priceSec d-flex align-items-center ">
        <span className="text-g priceLarge">Rs {currentpro.price} </span>
        <div className="ml-2 d-flex flex-column">
            <span className="text-org">{currentpro.discount}%off</span>
            <span className="text-dark oldPrice"> Rs {currentpro.oldPrice}</span>
        </div>
     </div>  
    <p>{currentpro.description}</p>
                 {
                                currentpro.weight !== undefined && currentpro.weight.length !== 0 &&
                                <div className='productSize d-flex align-items-center'>
                                    <span>Size / Weight:</span>
                                    <ul className='list list-inline mb-0 pl-4'>
                                        {
                                            currentpro.weight.map((item, index) => {
                                                return (
                                                    <li className='list-inline-item'><a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>{item}g</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
               }

                {
                                currentpro.RAM !== undefined && currentpro.RAM.length !== 0 &&
                                <div className='productSize d-flex align-items-center'>
                                    <span>RAM:</span>
                                    <ul className='list list-inline mb-0 pl-4'>
                                        {
                                            currentpro.RAM.map((RAM, index) => {
                                                return (
                                                    <li className='list-inline-item'><a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>{RAM} GB</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }



                            {
                                currentpro.SIZE !== undefined && currentpro.SIZE.length !== 0 &&
                                <div className='productSize d-flex align-items-center'>
                                    <span>SIZE:</span>
                                    <ul className='list list-inline mb-0 pl-4'>
                                        {
                                            currentpro.SIZE.map((SIZE, index) => {
                                                return (
                                                    <li className='list-inline-item'><a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>{SIZE}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }

                        <div className="d-flex align-items-center">
                                  {/* <div>
                                      <Quantity />
                                  </div> */}
                        
                              <div className="d-flex align-items-center pt-1 pb-1">
                                

                                  <Button className="btn-g addtoCart " onClick={()=>send(currentpro)}><ShoppingCartOutlinedIcon />{
                                    'Add'
                                  }</Button>
                                  <Button className="addtoCart btn-border"><CompareArrowsOutlinedIcon /></Button>
                                  <Button className=" addtoCart btn-border">   < FavoriteBorderOutlinedIcon/></Button>
                                  
                              </div>
                      </div>

     
       </div>

        </div>


        <div className="cart mt-5 p-3 detailtab">
          <div className="customtab">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Button  className={`${activeTab===0&&'active'}`} onClick={()=>setActiveTab(0)}> Description</Button>
              </li>
              <li className="list-inline-item">
                <Button className={`${activeTab===1&&'active'}`} onClick={()=>setActiveTab(1)}>Review</Button>
              </li>
              <li className="list-inline-item">
                <Button className={`${activeTab===2&&'active'}`} onClick={()=>setActiveTab(2)}> Other Info</Button>
              </li>
             
            </ul>
            <br />
             {
               activeTab===0&&
               <div className="tabcontent">
                <p>{currentpro.description}</p>
               </div>
             }
            {
                  activeTab===2&&
                  <div className="tabcontent">
                  <div className='table-responsive'>
                  <table className="table table-bordered">
                  <tbody>
                                                            <tr class="stand-up">
                                                                <th>Stand Up</th>
                                                                <td>
                                                                    <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="folded-wo-wheels">
                                                                <th>Folded (w/o wheels)</th>
                                                                <td>
                                                                    <p>32.5″L x 18.5″W x 16.5″H</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="folded-w-wheels">
                                                                <th>Folded (w/ wheels)</th>
                                                                <td>
                                                                    <p>32.5″L x 24″W x 18.5″H</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="door-pass-through">
                                                                <th>Door Pass Through</th>
                                                                <td>
                                                                    <p>24</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="frame">
                                                                <th>Frame</th>
                                                                <td>
                                                                    <p>Aluminum</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="weight-wo-wheels">
                                                                <th>Weight (w/o wheels)</th>
                                                                <td>
                                                                    <p>20 LBS</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="weight-capacity">
                                                                <th>Weight Capacity</th>
                                                                <td>
                                                                    <p>60 LBS</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="width">
                                                                <th>Width</th>
                                                                <td>
                                                                    <p>24″</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="handle-height-ground-to-handle">
                                                                <th>Handle height (ground to handle)</th>
                                                                <td>
                                                                    <p>37-45″</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="wheels">
                                                                <th>Wheels</th>
                                                                <td>
                                                                    <p>12″ air / wide track slick tread</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="seat-back-height">
                                                                <th>Seat back height</th>
                                                                <td>
                                                                    <p>21.5″</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="head-room-inside-canopy">
                                                                <th>Head room (inside canopy)</th>
                                                                <td>
                                                                    <p>25″</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="pa_color">
                                                                <th>Color</th>
                                                                <td>
                                                                    <p>Black, Blue, Red, White</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="pa_size">
                                                                <th>Size</th>
                                                                <td>
                                                                    <p>M, S</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
    
                  </table>
                  </div>
                 </div>
            }
           {
             activeTab===1&&
             <div className="tabcontent">
            
              <div className="row">
                    <div className="col-md-8">
                        <h3>Customer questions & answers</h3>
                        <br />

                        {
                           
                           reviewArra.length!==0&& reviewArra!==undefined&&
                          reviewArra.map((review,index)=>{
                            return(
                              <div className='card p-3 reviewsCard flex-row' key={index}>
                              <div className="image">
                                   <div className='rounded-circle'>
                                     <img src={Card1} />
                                     
                                   </div>
                                   <span className="text-g d-block text-center">{review.userName}</span>
                              </div>
   
   
                              <div className="info">
                                    <h5 >{month[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</h5>
                                    <Rating name="half-rating-read" value={parseFloat(review.rating)} precision={0.5} readOnly />
                                    <p>{review.review}</p>
                              </div>
                           </div>
                              
                            )
                          })
              
                          
                        }
                       
                        
                       
                        
                        


                        <br />
                        <form className="reviewform" onSubmit={submitReview}>
                          <h5>Add Review</h5>
                          <br />
                          <div className="form-group">
                            <textarea className="form-control" placeholder="Write review" name="review" onChange={(e)=>inputreview(e.target.name,e.target.value)} value={reviewfield.review}></textarea>
                          </div>
                          
                          

                          <div className="row">
                              <div className="col-md-6">
                                 <div className="form-group">
                                   <input type="text" className="form-control" placeholder="Name" name="userName" onChange={(e)=>inputreview(e.target.name,e.target.value)} value={reviewfield.userName}></input>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <Rating name="rating" value={reviewfield.rating} precision={0.5}  onChange={(e,newValue)=>{
                                      setRating(newValue);
                                      inputreview(e.target.name,e.target.value)
                                    }}/>
                                  </div>
                              </div>
                          </div>
                          
                        

                           <div className="form-group">
                            <Button  type='submit' className='btn-g'>Submit Review</Button>
                           </div>

                        </form>


                        
                    </div>
                      <div className="col-md-4 customerReview">
                        <h5>Customer reviews</h5>
                        <div className="d-flex align-items-center">
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <span className="rating">2.5 out of 5</span>
                        </div>
                        <br />
                        <div className="progressbar d-flex align-items-center">
                                  <span>5 star</span>
                                  <div class="progress" style={{width:'80%'}}>
                                         <div class="progress-bar bg-success" style={{width:'75%'}}>75%</div>
                                  </div>
                        </div>
                        <div className="progressbar d-flex align-items-center">
                                  <span>4 star</span>
                                  <div class="progress" style={{width:'80%'}}>
                                         <div class="progress-bar bg-success" style={{width:'55%'}}>55%</div>
                                  </div>
                        </div>
                        <div className="progressbar d-flex align-items-center">
                                  <span>3 star</span>
                                  <div class="progress" style={{width:'80%'}}>
                                         <div class="progress-bar bg-success" style={{width:'40%'}}>40%</div>
                                  </div>
                        </div>
                        <div className="progressbar d-flex align-items-center">
                                  <span>2 star</span>
                                  <div class="progress" style={{width:'80%'}}>
                                         <div class="progress-bar bg-success" style={{width:'35%'}}>35%</div>
                                  </div>
                        </div>
                        <div className="progressbar d-flex align-items-center">
                                  <span>1 star</span>
                                  <div class="progress" style={{width:'80%'}}>
                                         <div class="progress-bar bg-success" style={{width:'25%'}}>25%</div>
                                  </div>
                        </div>
                      </div>
              </div>

            </div>
           }
            
          </div>
        </div>


        <div className="relatedProduct zoomSlider">
            <h2 className='hd mt-0 mb-0'>Related Products</h2>
            <br />
             
              
             <Slider {...related} >
               
               {
                 
                relatedproduct.length!==0&&
                relatedproduct.map((product,index)=>{
                 return(
                     <div className="item">
                         <Products  tag={product.type} item={product} />
                     </div>
                 )
                })



               }
              </Slider>  
        </div>
               
        
      </div>
      
    </section>
  );
};

export default DetailPage;
