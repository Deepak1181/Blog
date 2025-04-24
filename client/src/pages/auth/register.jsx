import CommonForm from '@/components/common/form'
import { registerFormControls } from '@/config'
import { registerUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {


  const initialState={
    userName:"",
    email:"",
    password:""
  }
   const [formData,setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  //  console.log(formData,"formdata")

    
   const onSubmit =(event)=>{
          event.preventDefault()
          dispatch(registerUser(formData)).then((data)=>{
          console.log(data)
            // navigate('/auth/login')
          })


   }
  //  console.log(dispatch,"dispatch")
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>
          Create new account
        </h1>
        <p className='mt-2 '>Already have an account</p>
        <Link className='font-medium ml-5 text-primary hover:underline' to="/auth/login">Login</Link>
      </div>
      <CommonForm formControls={registerFormControls}
      buttonText={"Sign up"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default Register