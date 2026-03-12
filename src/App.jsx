import { Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Footer from './components/Footer'

// English pages
import EnHome from './pages/en/Home'
import EnAbout from './pages/en/About'
import EnServices from './pages/en/Services'
import EnGallery from './pages/en/Gallery'
import EnContact from './pages/en/Contact'
import EnConstruction from './pages/en/Construction'

// German pages
import DeHome from './pages/de/Home'
import DeAbout from './pages/de/About'
import DeServices from './pages/de/Services'
import DeGallery from './pages/de/Gallery'
import DeContact from './pages/de/Contact'
import DeConstruction from './pages/de/Construction'

// Croatian pages
import HrHome from './pages/hr/Home'
import HrAbout from './pages/hr/About'
import HrServices from './pages/hr/Services'
import HrGallery from './pages/hr/Gallery'
import HrContact from './pages/hr/Contact'
import HrConstruction from './pages/hr/Construction'

import 'flag-icons/css/flag-icons.min.css'

const VALID_LANGUAGES = ['en', 'de', 'hr'];

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* English Routes */}
        <Route path="/en" element={<EnHome />} />
        <Route path="/en/about" element={<EnAbout />} />
        <Route path="/en/services" element={<EnServices />} />
        <Route path="/en/gallery" element={<EnGallery />} />
        <Route path="/en/contact" element={<EnContact />} />
        <Route path="/en/construction" element={<EnConstruction />} />

        {/* German Routes */}
        <Route path="/de" element={<DeHome />} />
        <Route path="/de/about" element={<DeAbout />} />
        <Route path="/de/services" element={<DeServices />} />
        <Route path="/de/gallery" element={<DeGallery />} />
        <Route path="/de/contact" element={<DeContact />} />
        <Route path="/de/construction" element={<DeConstruction />} />

        {/* Croatian Routes */}
        <Route path="/hr" element={<HrHome />} />
        <Route path="/hr/about" element={<HrAbout />} />
        <Route path="/hr/services" element={<HrServices />} />
        <Route path="/hr/gallery" element={<HrGallery />} />
        <Route path="/hr/contact" element={<HrContact />} />
        <Route path="/hr/construction" element={<HrConstruction />} />

        {/* Default redirect to English */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Catch invalid language codes and redirect to English */}
        <Route path="/:lang/*" element={<Navigate to="/en" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}