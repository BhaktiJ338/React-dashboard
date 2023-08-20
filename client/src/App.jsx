import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import Dashboard from './pages/Dashboard'
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true

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
