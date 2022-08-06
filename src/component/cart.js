import {HStack,Text,Button} from "@chakra-ui/react"
import { Routes, Route, useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import { additem ,deleteitem} from "../features/cart";
import { useSelector,useDispatch } from 'react-redux'
export default function Products(){
    var dis=useDispatch()
var product=useSelector((s)=>s.Cart.value)




//  setp(pro)
 const sai=(e)=>{
    return(<>
    
<img src={e.image}
/>
<Text>
    {e.title}
</Text>
<Text>
    {e.price}
</Text>
<Button  onClick={()=>dis(additem(e))}>
add cart
</Button>
    
    
    </>)
  }
    return (<>
    
    {
        product.map(e=>sai(e))
    }
    
    </>)
    
    
    }