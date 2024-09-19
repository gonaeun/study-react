import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Login from './pages/Login';
import Join from './pages/Join';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header/>

      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
