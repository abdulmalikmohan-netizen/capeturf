/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import ResellerApplication from './components/ResellerApplication';
import Catalog from './components/Catalog';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Gallery />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/reseller-application" element={<ResellerApplication />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
        <SpeedInsights />
      </Router>
    </HelmetProvider>
  );
}

