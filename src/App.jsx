import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AtxDentistryPreview from './pages/AtxDentistryPreview'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/atx-dentistry" element={<AtxDentistryPreview />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
