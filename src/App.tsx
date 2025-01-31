// src/App.tsx
     import React from 'react';
     import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
     import Header from './components/Header/Header';
     import Home from './pages/Home/Home';
     import Agendamentos from './pages/Agendamentos/Agendamentos';

     const App: React.FC = () => {
       return (
         <Router>
           <Header title="Salão da Maria" />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/agendamentos" element={<Agendamentos />} />
           </Routes>
         </Router>
       );
     };

     export default App;