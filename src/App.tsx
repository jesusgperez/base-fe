import './App.css'
import { Navigate } from 'react-router-dom'
import { GlobalProvider } from './common/presenter/contexts/global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

function App() {
  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/login'/>}/>
            <Route path='/login' element={<></>}/>
            <Route path='/home' element={<h1>This is the home</h1>}/>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </GlobalProvider>
  )
}

export default App
