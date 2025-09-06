import React from 'react'
import './App.css'
import { Header, Hero, Services, Features, Pricing, Testimonials, FinalCTA, Footer } from './components'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
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
