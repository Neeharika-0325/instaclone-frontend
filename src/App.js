import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from './routers/AppRouter';
import PostContext from './components/PostViewPage/Post';
// require('dotenv').config();
// // import dotenv from 'dotenv';

function App() {
  return (
    <PostContext>
        <div className="App">
            <AppRouter/>
        </div>
    </PostContext>
    
  );
}

export default App;
