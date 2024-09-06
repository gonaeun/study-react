import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const MovieCard = ({ data }) => {   // MovieSlide에서 data를 props로 받기
  
  console.log("[MovieCard]:", data);

  const div_styled = {
    backgroundImage : `url(https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path})`,
    backgroundRepeat: 'no-repeat',   // 모자이크 배열 사라짐
    backgroundSize: 'cover'
  }
  
  return (
    <div className="movie-card" style={div_styled}>
      <Link to={`/movies/${data.id}`}>
          <div>
              <h1>{data.title}</h1>
              <div>장르</div>
              <div>평점: 0.0 | 청소년</div>
          </div>
      </Link>
    </div>
  );
}

export default MovieCard;
