import React from 'react'

interface props {
  styles?: string;
}

const Button = ({styles}: props) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg ${styles}`}>
      Get Started
    </button>
  )
}

export default Button