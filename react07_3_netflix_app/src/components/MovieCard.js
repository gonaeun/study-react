import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

const MovieCard = ({ data }) => {   // MovieSlide에서 data를 props로 받기

  const genreList = useSelector(state => state.movie.genreList)
  
  console.log("[MovieCard]:", data);

  const div_styled = {
    backgroundImage : `url(https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path})`,
    backgroundRepeat: 'no-repeat',   // 모자이크 배열 사라짐
    backgroundSize: 'cover'
  }
  
  return (
    <div className="movie-card" style={div_styled}>
      <Link to={`/movies/${data.id}`}>
          <div className='overlay'>
              <h1>{data.title}</h1>
              <div className='genre'>
                {data.genre_ids.map((id)=>(
                  <Badge bg="danger" key={id}>
                    {genreList.find((genre)=> genre.id === id).name}
                  </Badge>
                ))}
              </div>
              <div className='info'>평점: 0.0 | 청소년</div>
          </div>
      </Link>
    </div>
  );
}

export default MovieCard;
