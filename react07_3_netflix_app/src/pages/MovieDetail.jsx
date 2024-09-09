import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api' 
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Badge from 'react-bootstrap/esm/Badge'

const MovieDetail = () => {

  const {id} = useParams()
  const [movieInfo, setMovieInfo] = useState({ genres: [] })
  // 초기값을 genres: []로 해야, genres는 항상 배열이므로, map함수를 부를 때 오류가 발생하지 않음

  const getMovieInfo = async () =>{
    let res = await api.get(`/movie/${id}?language=ko-KR`)   //axios 객체를 api라는 이름으로 저장해뒀음

    setMovieInfo(res.data)
  }

  useEffect(()=>{
    getMovieInfo()
  },[])

  return (
    <Container className='container movie-details'>
      <Row>
        <Col className='poster'>
          <img src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt='포스터 이미지'/>
        </Col>
        <Col className='info'>
          <div className='genre'>
            {movieInfo.genres.map((genre)=>(
              <Badge key={genre.id} bg='danger'>{genre.name}</Badge>
            ))}
          </div>
          <h1>{movieInfo.title}</h1>
          <h4>{movieInfo.tagline}</h4>
          <div>
            <span>{movieInfo.release_date}</span>
            <span>{movieInfo.runtime}분</span>
            <span>평점:{movieInfo.vote_average}점</span>
            <span>{movieInfo.adult ? "청불":"청소년"}</span>
          </div>
          <div className='overview'>
          {movieInfo.overview}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail