import React from 'react'
import './Select1.css';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';



const Select = (props) => {
  const [isOpenSelect,setisOpenSelect]=useState(false);
  const [selectIndex,setselectIndex]=useState(0);
  const [selectItem,setselectItem]=useState(props.placeholder)
  const [listData,setlistData]=useState(props.data);
  const [listData2,setlistData2]=useState(props.data);

  const selectop=()=>{
    setisOpenSelect(!isOpenSelect);
  }
  const closeSelect=(index,element)=>{
   setselectIndex(index);
   setisOpenSelect(!isOpenSelect);
   setselectItem(element);
}
 const filterList =(e)=>{
           const keyword=e.target.value.toLowerCase();
         const list=  listData2.filter((item)=>{
                  return item.toLowerCase().includes(keyword);
           })
           const list2=list.filter((item,index)=>{
             
            if(list.indexOf(item)===index)
              return item;

           })
          setlistData(list2);
           
 }
  return (
    <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
    <div className='selecrDropWrapper curso position-relative'>
         {props.icon}
      <span className='openSelect'onClick={selectop}> {selectItem.length>14 ? selectItem.slice(0,13)+'...':selectItem} <KeyboardArrowDownIcon className='arrow'/></span>
      {
        isOpenSelect===true&&<div className='selectDrop'>
          <div className='searchField'>
             <input type="text" placeholder='Search here...' onChange={filterList}/>
          </div>
          <ul className='searchResults'>
          <li key={0} onClick={()=>closeSelect(0,props.placeholder)} className={`${selectIndex===0 ? 'active': ''}`}>{props.placeholder}</li>

            {
                listData.map((item,index)=>{
                  return(
                  <li key={index+1} onClick={()=>closeSelect(index+1,item)} className={`${selectIndex===index+1 ? 'active': ''}`}>{item}</li>
                  )
                })
            }
               
             </ul>
        </div>   
        }
      
               
                 </div>
    </ClickAwayListener>
  )
}

export default Select