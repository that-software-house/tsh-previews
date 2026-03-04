import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AtxDentistryPreview from './pages/AtxDentistryPreview'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/atx-dentistry" replace />} />
      <Route path="/atx-dentistry" element={<AtxDentistryPreview />} />
      <Route path="*" element={<Navigate to="/atx-dentistry" replace />} />
    </Routes>
  )
}

export default App

