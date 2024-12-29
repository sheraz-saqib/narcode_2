import React from 'react'

const TextArea = ({placeholder,innerText,name}) => {
  return (
    <textarea
    placeholder={placeholder}
    name={name}
    className="w-full p-3 mb-4 border placeholder:text-[.8rem] text-[.8rem] border-gray-400 bg-transparent rounded-lg focus:outline-none "
    rows="4"
  >{innerText}</textarea>
  )
}

export default TextArea
