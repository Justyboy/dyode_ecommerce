import React from 'react'

const Topbar = (props) => {
    const {message} = props; 
  return (
    <div className="topbar-text">{message}</div>
  )
}

export default Topbar