import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const MovieSlide = ({movie}) => {   //props로 movie 받아주기
    // movie가 배열인지 확인하여 안전하게 map 사용
  if (!movie || !Array.isArray(movie)) {
    return null; // movie가 없으면 아무것도 렌더링하지 않음 >> map에 관한 오류 해결!
  }

    return (
      <Carousel responsive={responsive}>
        {movie.map((item, index)=>(
         <MovieCard key={index} movie={item}/>
        )
        )}
      </Carousel>
    )

  }
  
export default MovieSlide