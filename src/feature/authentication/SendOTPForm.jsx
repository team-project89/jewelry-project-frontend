
import TextField from '@/components/ui/TextField'
import React from 'react'

function SendOTPForm() {
  return (
      <div dir='rtl'>
        <form >
          <TextField 
            // type= "number"
            label="لطفا شماره تلفن خود را وارد کنید"
          />
          <button className='btn btn--primary w-full'>
            ارسال کد تایید
          </button>
        </form>   
    </div>
  )
}

export default SendOTPForm