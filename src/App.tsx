import './App.css'
import Form from './components/pages/Form'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import Error from './components/pages/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {InfosProvider} from './InfosProvider'
import Users from './components/pages/Users'
import { Subjects } from './components/pages/Subjects'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Subjects" element={<Subjects />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/form" element={
            <InfosProvider>
              <Form />
            </InfosProvider>
         } />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App