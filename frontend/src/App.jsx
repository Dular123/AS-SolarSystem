import React from 'react';
import Home from './pages/Home';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ConsultationModal from './components/ConsultationModal';

function App() {
  return (
    <div className="App">
      <Home />
      <FloatingWhatsApp />
      <ConsultationModal />
    </div>
  );
}

export default App;
