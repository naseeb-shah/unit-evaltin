import {HStack,Text,Button} from "@chakra-ui/react"
import { Routes, Route, useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import { additem ,deleteitem} from "../features/cart";
import { useSelector,useDispatch } from 'react-redux'
export default function Products(){
    var dis=useDispatch()
var id=useParams().id
console.log(id)
const[product,setp]=useState([])
const[sa,ss]=useState(false)
// console.log(cart)
useEffect(() => {
   fetch(`http://localhost:3000/products/${id}`)
   .then(product=>product.json())
   .then(product=>{setp(product)
ss(true)
})
 
 },[]);
 console.log(product)
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
        ss?sai(product):''
    }
    
    </>)
    
    
    }