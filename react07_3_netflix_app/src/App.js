import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import api from './api'  // axios 사용할거면, 우리가 만든 api로 불러오기

function App() {

  const getMovieData = async() =>{
    const API_URL = '/movie/popular?language=ko-KR&page=1';
    // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
    const res = await api.get(API_URL)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨

    console.log(res.data);
    
  }

  useEffect(()=>{
    getMovieData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
