import {HStack,Input,Box,Button} from "@chakra-ui/react"
import { useState } from "react"
import { useSelector,useDispatch } from 'react-redux'
import {log,out} from '../features/auth/auth'
export default function Login(){
    const Ll=useSelector((s)=>s.Auth.value)
    var dis=useDispatch()
const [use,setu]=useState('')
const [pas,spas]=useState('')


    return (<>
    <Box mt='100px'>


<Input
onChange={(e)=>setu(e.target.value)}
placeholder={'email'}
>


</Input>

<Input
    onChange={(e)=>spas(e.target.value)}
placeholder={'Pasword'}
>


</Input>

<Button onClick={()=>dis(log({    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}))}>
    Login
</Button>

    </Box>
    
    
    </>)
    
    
    }