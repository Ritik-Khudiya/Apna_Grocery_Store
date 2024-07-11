


import React, { useState, useEffect } from 'react';
import "./index.css";
import { Link, useParams } from "react-router-dom";
import Products from '../Products/Index'
import Sidebar from "../Sidebar";
import { Button } from "@mui/material";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

import {MyContext} from '../../App'
import { useContext } from 'react';


const Listing = (props) => {
    const context  = useContext(MyContext);
    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
    

    const [data, setData] = useState([]);



  

    let { id } = useParams();

    var itemsData = [];


    useEffect(() => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    if (item.cat_name.toLowerCase() == id.toLowerCase()) {

                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.map((item__, index__) => {
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            })


                    }
                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {

                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })

                                })

                            }
                        })
                }

            })




         const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);

     
            setData(list2);
        

            window.scrollTo(0, 0);

    }, [id])






    const filterByBrand = (keywo) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.map((item__, index__) => {
                                if (item__.brand.toLowerCase() === keywo.toLowerCase()) {
                                    //console.log(item__)
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                }


                            })

                        })


                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {
                                    if (item__.brand.toLowerCase() === keywo.toLowerCase()) {
                                        itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                    }

                                })

                            }
                        })
                }

            })



        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
        //console.log(itemsData)


        setData(list2);

        window.scrollTo(0, 0);
    }




    const filterByPrice = (minValue, maxValue) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {
                    if (id === item.cat_name.toLowerCase()) {
                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.length !== 0 &&
                                    item_.products.map((product, prodIndex) => {
                                        let price = parseInt(product.price.toString().replace(/,/g, ""))
                                        if (minValue <= price && maxValue >= price) {
                                            itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                        }

                                    })
                            })
                    }
                }

                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((product) => {
                                    let price = parseInt(product.price.toString().replace(/,/g, ""))
                                    if (minValue <= price && maxValue >= price) {
                                        itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                    }
                                })

                            }
                        })
                }

            })

        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
        setData(list2);
      
    }





    const filterByRating = (keywo) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    if (item.cat_name.toLowerCase() == id.toLowerCase()) {

                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.map((item__, index__) => {
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            })


                    }
                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {

                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })

                                })

                            }
                        })
                }

            })




        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);

        setData(list2);

        data?.map((item)=>{
            if(item.rating===keywo){
                itemsData.push({ ...item, parentCatName: item.cat_name, subCatName: item.cat_name })
            }
        })


        const list3 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
      
        setData(list2);

        window.scrollTo(0, 0);

    }



    return (
         <>
                            {
                                    context.windowwidth<992&& <Button className='btn-g filterbtn text-capitalize' onClick={()=>context.openfilter()}>Filter</Button>
                                }
                                  <section className='listingPage'>

<div className='container-fluid'>

    
          <div className='breadcrumb flex-column'>
            <h1 className="text-capitalize">{sessionStorage.getItem('cat')}</h1>
             <ul className='list list-inline mb-0'>
                <li className='list-inline-item'>
                    <Link to={'/'}>Home </Link>
                </li>
                <li className='list-inline-item'>
                    <Link to={`/cat/${sessionStorage.getItem('cat')}`} className='text-capitalize'>{sessionStorage.getItem('cat')} </Link>
                </li>
                {
                    props.single === false &&
                    <li className='list-inline-item'>
                        <Link to={''} class="text-capitalize">{id.split('-').join(' ')}</Link>
                    </li>
                }
            </ul>
        </div>

    



    <div className='listingData'>
        <div className='row'>
            <div className={`col-md-3 sidebarWrapper ${context.isOpenFilters===true && 'click'}`}>
                
                 

                {
                    data.length !== 0 && <Sidebar data={props.data} currentCatData={data}  filterByPrice={filterByPrice} filterByBrand={filterByBrand} filterByRating={filterByRating} />
                }

            </div>


            <div className='homeProduct col-md-9 rightContent  pt-0'>


                <div className='topstrip d-flex align-content-center'>
                    <p className='mb-0 part1'>We found <span className='text-success'>{data.length}</span> items</p>
                    <div className='ml-auto d-flex align-content-center part2'>
                        <div className='tab position-relative'>
                            <Button className='btn_' onClick={() => setisOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon /> Show: </Button>
                            {
                                isOpenDropDown !== false &&
                                <ul className='dropMenu'>
                                    <li><Button    onClick={() => {setisOpenDropDown(!isOpenDropDown)}}> 50 </Button></li>
                                    <li><Button    onClick={() => {setisOpenDropDown(!isOpenDropDown)}}> 100 </Button></li>
                                    <li><Button    onClick={() => {setisOpenDropDown(!isOpenDropDown)}}> 500 </Button></li>
                                    <li><Button    onClick={() => {setisOpenDropDown(!isOpenDropDown)}}> 1000 </Button></li>
                                    <li><Button    onClick={() => {setisOpenDropDown(!isOpenDropDown)}}> 20000 </Button></li>
                                   

                                    

                                    
                                </ul>
                            }
                        </div>
                        <div className='tab position-relative'>
                            <Button className='btn_' onClick={() => setisOpenDropDown2(!isOpenDropDown2)}><FilterListOutlinedIcon /> Sort by: Featured </Button>
                            {
                                isOpenDropDown2 !== false &&
                                <ul className='dropMenu'>
                                    <li><Button  onClick={() => setisOpenDropDown2(!isOpenDropDown2)}>Featured</Button></li>
                                    <li><Button  onClick={() => setisOpenDropDown2(!isOpenDropDown2)}> Price: Low to High</Button></li>
                                    <li><Button  onClick={() => setisOpenDropDown2(!isOpenDropDown2)}> Price: High to Low</Button></li>
                                    <li><Button  onClick={() => setisOpenDropDown2(!isOpenDropDown2)}> Release Date</Button></li>
                                    <li><Button  onClick={() => setisOpenDropDown2(!isOpenDropDown2)}> Avg. Rating</Button></li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>

                <div className='productRow pl-3'>

                    {
                        data.length !== 0 &&
                        data.map((item, index) => {
                            return (
                                <div className='item' key={index}>
                                    <Products tag={item.type} item={item} />
                                </div>
                            )
                        })
                    }


                </div>

               

            </div>

        </div>
    </div>


</div>
</section>

         </>

          
        

    )
}

export default Listing;
