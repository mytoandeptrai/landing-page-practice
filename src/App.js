import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import publicRoutes from 'routes'

import './App.scss'
function App() {
  return (
    <BrowserRouter basename='/'>
      <Helmet defaultTitle='Practice Landing page'>
        <meta name='description' content='Practice Landing page' />
      </Helmet>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
