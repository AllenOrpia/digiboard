import React from 'react';
import './galleryItem.css';

const galleryItem = ( {item} ) => {
  return (
    <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(item.height/100)}`}}>
        <img  src={item.media} alt={`Gallery item ${item.id}`} />
        {/* Math.ceil() */}
    </div>
  )
}

export default galleryItem