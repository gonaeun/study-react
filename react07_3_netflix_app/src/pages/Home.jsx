import React from 'react'
import api from '../api' 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initData } from '../redux/reducers/movieSlice';
import Banner from '../components/Banner';

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(state => state.movie.popularMovies)   // REDUX에 저장된 데이터를 사용하기 위해 useSelector

  const fetchMovieData = async () => {
    // API 호출
    const API_URL1 = '/movie/popular?language=ko-KR&page=1';
    const API_URL2 = '/movie/top_rated?language=ko-KR&page=1';
    const API_URL3 = '/movie/upcoming?language=ko-KR&page=1';
    // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
    const popularMovies = await api.get(API_URL1);  //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    const topRatedMovies = await api.get(API_URL2);
    const upcomingMovies = await api.get(API_URL3);

    // 데이터를 하나의 객체로 묶어서 initData에 전달
    dispatch(initData({
      popularMovies: popularMovies.data,    // 데이터를 객체 형태로 만들어 initData 액션에 전달  //{popularMovies : data}라는 payload값 입력함. REDUX에 업데이트됨
      topRatedMovies: topRatedMovies.data,
      upcomingMovies: upcomingMovies.data
    }));
  };

  useEffect(() => {
    fetchMovieData();
  }, [dispatch]);  // dispatch는 의존성 배열에 추가

  return (
    <div>
      <h1>Home Page</h1>
      <Banner movie={popularMovies.results[0]}/>
    </div>
  );
};

export default Home;

// const Home = () => {
//   const dispatch = useDispatch();

//     const popularMovieData = async() =>{
//         const API_URL1 = '/movie/popular?language=ko-KR&page=1';
//         // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
//         const res = await api.get(API_URL1)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
//         // console.log('popularMovies :', res.data);
//         dispatch(initData({ popularMovies : res.data }));  // 데이터를 객체 형태로 만들어 initData 액션에 전달  //{popularMovies : res.data}라는 payload값 입력함
//       }

//       const topRatedMovieData = async() =>{
//         const API_URL2 = '/movie/top_rated?language=ko-KR&page=1';
//         // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
//         const res = await api.get(API_URL2)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
//         // console.log('topRatedMovies :', res.data);
//         dispatch(initData({ topRatedMovies: res.data })); 
//       }

//       const upcomingMovieData = async() =>{
//         const API_URL3 = '/movie/upcoming?language=ko-KR&page=1';
//         // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
//         const res = await api.get(API_URL3)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
//         // console.log('upcomingMovies :', res.data);
//         dispatch(initData({ upcomingMovies: res.data })); 
//       }
    
//       useEffect(()=>{
//         popularMovieData()
//         topRatedMovieData()
//         upcomingMovieData()
//       },[])


//       return (
//         <div>
//           <h1>Home Page</h1>
//         </div>
//       );
      
// }

// export default Home