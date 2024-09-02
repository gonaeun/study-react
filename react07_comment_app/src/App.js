import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBox from './components/SearchBox';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  return (
    <div>
      <h1>게시글</h1>
      <div>
        <SearchBox/>
        <hr/>
        <CommentForm/>
        <CommentList/>
      </div>
    </div>
  );
}

export default App;