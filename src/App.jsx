import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Game from './pages/Game'
import Menu from './pages/Home'
import './index.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game" element={<Game />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}
export default App;