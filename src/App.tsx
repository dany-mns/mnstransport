import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { Fleet } from '@/pages/Fleet'
import { Coverage } from '@/pages/Coverage'
import { Quote } from '@/pages/Quote'
import { Contact } from '@/pages/Contact'
import { Privacy } from '@/pages/Privacy'
import { Cookies } from '@/pages/Cookies'
import { Terms } from '@/pages/Terms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="coverage" element={<Coverage />} />
          <Route path="quote" element={<Quote />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
