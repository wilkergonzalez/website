import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NameEntry from './components/NameEntry'
import HomePage from './components/HomePage'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.css'

function App() {
  const [userName, setUserName] = useState(null)

  const handleNameSubmit = (name) => {
    setUserName(name)
  }

  if (!userName) {
    return (
      <div className="app">
        <NameEntry onNameSubmit={handleNameSubmit} />
      </div>
    )
  }

  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage userName={userName} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
