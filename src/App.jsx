import React from 'react'
import './App.css'
import { Header, Hero, Services, Features, Pricing, Testimonials, FinalCTA, Footer } from './components'
import OceanCursor from './components/OceanCursor'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <OceanCursor />
      <Header />
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
