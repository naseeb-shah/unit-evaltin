import { Button, Heading, HStack ,Text} from "@chakra-ui/react";
import { useState ,useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux'

import { useNavigate } from "react-router-dom";

export default function Home(){
 
var navi=useNavigate()

 const[product,setp]=useState([])
//  console.log(cart)
 useEffect(() => {
    fetch(`http://localhost:3000/products`)
    .then(product=>product.json())
    .then(product=>setp(product))
  
  },[]);


  const sai=(e)=>{
    return(<>
    <HStack>
<img src={e.image}
/>
<Text>
    {e.title}
</Text>
<Text>
    {e.price}
</Text>
<Button onClick={()=>navi(`product/${e.id}`)}>
detils
</Button>
    </HStack>
    
    </>)
  }
  console.log(product)
    return(
        <>
        <Heading> deen shah shome</Heading>
        {
            product.map(e=>sai(e))
        }
        </>
    )
}