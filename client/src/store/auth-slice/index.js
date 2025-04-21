// 

import { createSlice } from "@reduxjs/toolkit"

const initialState={
isAuthenticated:false,
iseloading:false,
user:null
}

 const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setuser:(state,action)=>{

        }
    }
 })

 export const {setUser} = authSlice.actions
 export default authSlice.reducer