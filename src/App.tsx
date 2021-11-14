import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainView from './views/MainView'
import SearchView from './views/SearchView'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/search" element={<SearchView />} />
      </Routes>
    </Router>
  )
}

export default App
