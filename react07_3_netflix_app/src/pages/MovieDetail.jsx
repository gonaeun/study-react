import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api' 
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const MovieDetail = () => {

  const {id} = useParams()
  const [movieInfo, setMovieInfo] = useState({})

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
        <Col></Col>
      </Row>
    </Container>
  )
}

export default MovieDetail