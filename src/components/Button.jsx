import React from 'react'

const Button = ({ text, type = "button", onClick, loading }) => {
  return (

        <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-300"
    >
      {loading ? "Please wait..." : text}
    </button>
    
  )
}

export default Button
