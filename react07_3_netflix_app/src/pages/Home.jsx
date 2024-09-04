import React from 'react'
import api from '../api' 
import { useEffect } from 'react';


const Home = () => {

    const popularMovieData = async() =>{
        const API_URL1 = '/movie/popular?language=ko-KR&page=1';
        // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
        const res = await api.get(API_URL1)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
        console.log(res.data);
        
      }

    //   const topRatedMovieData = async() =>{
    //     const API_URL2 = '/movie/top_rated?language=ko-KR&page=1';
    //     // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
    //     const res = await api.get(API_URL2)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
    //     console.log(res.data);
        
    //   }

    //   const upcomingMovieData = async() =>{
    //     const API_URL3 = '/movie/upcoming?language=ko-KR&page=1';
    //     // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
    //     const res = await api.get(API_URL3)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
    //     console.log(res.data);
        
    //   }
    
      useEffect(()=>{
        popularMovieData()
        // topRatedMovieData()
        // upcomingMovieData()
      },[])


      return (
        <div>
          <h1>Home Page</h1>
        </div>
      );
      
}

export default Home