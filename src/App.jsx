import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AtxDentistryPreview from './pages/AtxDentistryPreview'
import AustinDentalCoPreview from './pages/AustinDentalCoPreview'
import AustinFamilyDDSPreview from './pages/AustinFamilyDDSPreview'
import BlueSkyDentalPreview from './pages/BlueSkyDentalPreview'
import DaybreakDentalPreview from './pages/DaybreakDentalPreview'
import HighPointSmilesPreview from './pages/HighPointSmilesPreview'
import CoolCreekFamilyDentalPreview from './pages/CoolCreekFamilyDentalPreview'
import ENTSAustinPreview from './pages/ENTSAustinPreview'
import WowDentalPreview from './pages/WowDentalPreview'
import YouFirstDentalPreview from './pages/YouFirstDentalPreview'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/atx-dentistry" element={<AtxDentistryPreview />} />
      <Route path="/austin-dental-co" element={<AustinDentalCoPreview />} />
      <Route path="/austin-family-dds" element={<AustinFamilyDDSPreview />} />
      <Route path="/blue-sky-dental" element={<BlueSkyDentalPreview />} />
      <Route path="/cool-creek-family-dental" element={<CoolCreekFamilyDentalPreview />} />
      <Route path="/ents-austin" element={<ENTSAustinPreview />} />
      <Route path="/wow-dental" element={<WowDentalPreview />} />
      <Route path="/daybreak-dental" element={<DaybreakDentalPreview />} />
      <Route path="/high-point-smiles" element={<HighPointSmilesPreview />} />
      <Route path="/you-first-dental" element={<YouFirstDentalPreview />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
