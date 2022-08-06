import { createSlice } from '@reduxjs/toolkit'


export const Auth=createSlice({
    name:"Auth",
    initialState:{
        value:false
    }
    ,reducers:{

        log:async(state,action)=>{
            var sai
            console.log(action.payload)
            // console.log("trigger")
            fetch('https://reqres.in/api/login',{
    method:"POST",
    body:JSON.stringify(action.payload),
    headers:{
        'Content-Type':"application/json"
    }
}).then(x=>x.json()).then(x=>console.log(x))
state.value=true

  


        }
        ,
        out:(state,action)=>{
            state.value=false
        }
    }
})
export default Auth.reducer
export const{log,out}=Auth.actions