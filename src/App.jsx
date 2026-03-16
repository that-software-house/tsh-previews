import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AtxDentistryPreview from './pages/AtxDentistryPreview'
import AustinDentalCoPreview from './pages/AustinDentalCoPreview'
import AustinFamilyDDSPreview from './pages/AustinFamilyDDSPreview'
import AustinSkylineDentalPreview from './pages/AustinSkylineDentalPreview'
import BlueSkyDentalPreview from './pages/BlueSkyDentalPreview'
import BishopArtsDentalPreview from './pages/BishopArtsDentalPreview'
import DaybreakDentalPreview from './pages/DaybreakDentalPreview'
import HighPointSmilesPreview from './pages/HighPointSmilesPreview'
import HighlandParkDentalPreview from './pages/HighlandParkDentalPreview'
import HighlandSmilesDentalPreview from './pages/HighlandSmilesDentalPreview'
import IndependenceDentalPlanoPreview from './pages/IndependenceDentalPlanoPreview'
import CoolCreekFamilyDentalPreview from './pages/CoolCreekFamilyDentalPreview'
import ENTSAustinPreview from './pages/ENTSAustinPreview'
import WowDentalPreview from './pages/WowDentalPreview'
import YouFirstDentalPreview from './pages/YouFirstDentalPreview'
import BearCreekFamilyDentistryPreview from './pages/BearCreekFamilyDentistryPreview'
import MidtownFamilyDentistryPreview from './pages/MidtownFamilyDentistryPreview'
import NorthDallasDentalGroupPreview from './pages/NorthDallasDentalGroupPreview'
import NorthparkDentalAssociatesPreview from './pages/NorthparkDentalAssociatesPreview'
import AustinArtisticDentalPreview from './pages/AustinArtisticDentalPreview'
import WellnessBayHealthPreview from './pages/WellnessBayHealthPreview'
import LadybirdLibationsPreview from './pages/LadybirdLibationsPreview'
import DallasLaserDentistryPreview from './pages/DallasLaserDentistryPreview'
import PrestonHollowDentalCarePreview from './pages/PrestonHollowDentalCarePreview'
import WilliamHMillerDMDPreview from './pages/WilliamHMillerDMDPreview'
import CasperFamilyDentistryPreview from './pages/CasperFamilyDentistryPreview'
import OakCliffDentalCenterPreview from './pages/OakCliffDentalCenterPreview'
import RossAvenueFamilyDentalPreview from './pages/RossAvenueFamilyDentalPreview'
import LakewoodFamilyDentalCarePreview from './pages/LakewoodFamilyDentalCarePreview'
import LakewoodRestorativeDentistryPreview from './pages/LakewoodRestorativeDentistryPreview'
import DeepEllumAdvancedDentistryPreview from './pages/DeepEllumAdvancedDentistryPreview'
import DentalCenterOfLakewoodPreview from './pages/DentalCenterOfLakewoodPreview'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/atx-dentistry" element={<AtxDentistryPreview />} />
      <Route path="/austin-dental-co" element={<AustinDentalCoPreview />} />
      <Route path="/austin-family-dds" element={<AustinFamilyDDSPreview />} />
      <Route path="/austin-skyline-dental" element={<AustinSkylineDentalPreview />} />
      <Route path="/blue-sky-dental" element={<BlueSkyDentalPreview />} />
      <Route path="/bishop-arts-dental" element={<BishopArtsDentalPreview />} />
      <Route path="/cool-creek-family-dental" element={<CoolCreekFamilyDentalPreview />} />
      <Route path="/ents-austin" element={<ENTSAustinPreview />} />
      <Route path="/wow-dental" element={<WowDentalPreview />} />
      <Route path="/daybreak-dental" element={<DaybreakDentalPreview />} />
      <Route path="/high-point-smiles" element={<HighPointSmilesPreview />} />
      <Route path="/highland-park-dental" element={<HighlandParkDentalPreview />} />
      <Route path="/highland-smiles-dental" element={<HighlandSmilesDentalPreview />} />
      <Route path="/independence-dental-plano" element={<IndependenceDentalPlanoPreview />} />
      <Route path="/you-first-dental" element={<YouFirstDentalPreview />} />
      <Route path="/bear-creek-family-dentistry" element={<BearCreekFamilyDentistryPreview />} />
      <Route path="/midtown-family-dentistry-dallas" element={<MidtownFamilyDentistryPreview />} />
      <Route path="/north-dallas-dental-group" element={<NorthDallasDentalGroupPreview />} />
      <Route path="/northpark-dental-associates" element={<NorthparkDentalAssociatesPreview />} />
      <Route path="/austin-artistic-dental" element={<AustinArtisticDentalPreview />} />
      <Route path="/wellness-bay-health" element={<WellnessBayHealthPreview />} />
      <Route path="/ladybird-libations" element={<LadybirdLibationsPreview />} />
      <Route path="/dallas-laser-dentistry" element={<DallasLaserDentistryPreview />} />
      <Route path="/preston-hollow-dental-care" element={<PrestonHollowDentalCarePreview />} />
      <Route path="/william-h-miller-dmd" element={<WilliamHMillerDMDPreview />} />
      <Route path="/casper-family-dentistry" element={<CasperFamilyDentistryPreview />} />
      <Route path="/oak-cliff-dental-center" element={<OakCliffDentalCenterPreview />} />
      <Route path="/ross-avenue-family-dental" element={<RossAvenueFamilyDentalPreview />} />
      <Route path="/lakewood-family-dental-care" element={<LakewoodFamilyDentalCarePreview />} />
      <Route
        path="/lakewood-restorative-dentistry"
        element={<LakewoodRestorativeDentistryPreview />}
      />
      <Route path="/deep-ellum-advanced-dentistry" element={<DeepEllumAdvancedDentistryPreview />} />
      <Route path="/dental-center-of-lakewood" element={<DentalCenterOfLakewoodPreview />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
