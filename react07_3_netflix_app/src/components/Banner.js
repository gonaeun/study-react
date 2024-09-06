import React from 'react'

const Banner = ({data}) => {   // Home.jsx의 return창에서 data를 props로 넘겨받음
    if (!data) return null  // data 데이터가 없으면 렌더링하지 않도록! (오류창 이슈)

    console.log(data);
    
    return (
        <div style={{ 
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '400px', 
          color: '#fff', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '20px'
        }}>
          <h1>{data.title || data.original_title}</h1>
          <p>{data.overview}</p>
        </div>
      );
    };
    
export default Banner;