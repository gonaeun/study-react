import React from 'react';

const MovieCard = ({ movie }) => {   // movie를 props로 받기
  return (
    <div className="movie-card">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        // 넘겨받은 영화 정보 중, poster_path를 배경이미지로 설정
        alt={movie.title} 
        className="movie-poster"
      />
    </div>
  );
}

export default MovieCard;
