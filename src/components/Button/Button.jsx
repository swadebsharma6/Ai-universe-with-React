import React from 'react'

const Button = ({children}) => {
  return (
    <div className='text-center my-6'>
    <button className="btn btn-error text-white">{children}</button>
    </div>
  )
}

export default Button
