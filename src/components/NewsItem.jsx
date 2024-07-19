import React from 'react';
import image from '../assets/news-default.png';

const toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

export const NewsItem = ({title, imageSrc, url, source}) => {
  const formattedTitle = toTitleCase(title);

  return (
    <div className="card bg-transparent border-0 d-inline-block mx-2 my-3" style={{width:"350px"}}>
      <div className="card-header border-secondary d-flex px-0" style={{
        height: '50px',
        width: '325px',
        padding: '2px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="card-title link-light text-decoration-none" style={{
          maxHeight: '50px', 
          overflowY: 'auto', 
          display: 'block', 
          fontFamily: 'Montserrat',
          lineHeight: "1.5",
          textAlign: 'center',
          width: '100%',
          scrollbarWidth: 'none',  
          msOverflowStyle: 'none',  
          fontWeight: 'bold',
          '&::-webkit-scrollbar': {  
            display: 'none'
          }
        }}>
          {formattedTitle}
        </div>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img 
            src={imageSrc ? imageSrc : image} 
            className="py-2 card-img-top" 
            style={{
              height: "230px", 
              width: '325px',
              transition: 'transform 0.3s ease-in-out',
              borderRadius: '10px'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            alt="..."
          />
        </a>
        <div style={{
          position: 'absolute',
          bottom: '6px',
          left: '-4px',
          padding: '2px 5px',
          borderRadius: '3px',
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.6rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontStyle: 'italic',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }} className='badge'>
            ©{source}
          </p>
        </div>
      </div>
    </div>
  )
}