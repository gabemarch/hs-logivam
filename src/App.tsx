import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageLayout } from './components/layout/PageLayout'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/szolgaltatasok" element={<ServicesPage />} />
          <Route path="/rolam" element={<AboutPage />} />
          <Route path="/kapcsolat" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
