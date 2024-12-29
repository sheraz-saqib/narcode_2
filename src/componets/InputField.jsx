import React from 'react'

const InputField = ({type = 'text',placeholder,name }) => {
  return (
    <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="w-full p-3 placeholder:text-[.8rem] text-[.8rem] border border-gray-400 bg-transparent rounded-lg focus:outline-none "
  />
  )
}

export default InputField
