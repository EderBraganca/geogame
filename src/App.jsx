import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Game from './pages/Game'
import Menu from './pages/Menu'
import './index.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;