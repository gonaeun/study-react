import React from 'react'

const Banner = ({movie}) => {   // movie를 props로 넘겨받음
    if (!movie) return null  // movie 데이터가 없으면 렌더링하지 않도록
    return (
        <div style={{ 
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '400px', 
          color: '#fff', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '20px'
        }}>
          <h1>{movie.title || movie.original_title}</h1>
          <p>{movie.overview}</p>
        </div>
      );
    };
    
export default Banner;