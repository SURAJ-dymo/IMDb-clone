
import './App.css'
import Header from './components/common/Header';
import CategoryMovie from './pages/CategoryMovie';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routePath } from './constant/routes';
const App = () => {


  return (
    <div >
      <Router>
        <Routes>
          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.categories} element={<CategoryMovie />} />
          {/* <Route path={`${routePath.movies}/:type`} element={<Movies />} /> */}
          {/* <Route path={`${routePath.movie}/:id`} element={<Movie />} /> */}
          <Route path={routePath.invalid} element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;