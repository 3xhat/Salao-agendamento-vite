// src/pages/Agendamentos/Agendamentos.tsx
     import React from 'react';

     const Agendamentos: React.FC = () => {
       return (
         <div>
           <h2>Agendamentos</h2>
           <form>
             <input type="text" placeholder="Nome do cliente" />
             <input type="datetime-local" />
             <button type="submit">Agendar</button>
           </form>
           <ul>
             <li>Cliente: Maria - Serviço: Corte - Data: 01/01/2024 10:00</li>
           </ul>
         </div>
       );
     };

     export default Agendamentos;