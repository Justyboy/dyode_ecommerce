import React from 'react'


function Collection({image, title}) {

  return (
     
    <div className="collection">
        <div className="collection-image">
            <img src={image} alt="collection image" width="100%"
            height="auto"></img>
        </div>
        <div className="collection-title">
            <p>{title}</p>
        </div>
     </div>
    
  )
}

export default Collection