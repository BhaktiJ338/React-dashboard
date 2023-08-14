import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
