import React from 'react';
import './galleryItem.css';
import { Link } from 'react-router';
import Image from '../image/image';

const galleryItem = ( {item} ) => {

  const optimizedHeight = (372 / item.height) * item.width;
  return (
    <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(item.height/100)}`}}>
        {/* <img  src={item.media} alt={`Gallery item ${item.id}`} /> */} 
        <Image path={item.media} alt={`Gallery item ${item.id}`} className="galleryImage" w={372} h={optimizedHeight} />
        <Link to={`/pin/${item.id}`} className='overlay'></Link>
        <button className='saveButton'>Save</button>

        <div className='overlayIcons'>
          <button>
            <img src="/general/share.svg" alt="share icon" />
          </button>
          <button>
            <img src="/general/more.svg" alt="share icon" />
          </button>
          

        </div>
    </div>
  )
}

export default galleryItem