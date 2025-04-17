import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Testimonials from './pages/Testimonials';
import CaseStudies from './pages/CaseStudies';
import Services from './pages/Services';
import LiveChat from './components/LiveChat';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Fallback route */}
          </Routes>
          <Footer />
          <LiveChat />
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;