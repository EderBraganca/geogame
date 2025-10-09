import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './pages/Game'
import Menu from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import GamemodeSelect from './pages/GamemodeSelect'

import './index.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/gamemodeselect' element={<GamemodeSelect />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}
export default App;