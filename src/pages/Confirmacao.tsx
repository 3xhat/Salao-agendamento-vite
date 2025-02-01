import React from 'react';
   import { useLocation } from 'react-router-dom';

   const Confirmacao = () => {
     const location = useLocation();
     const { nome, servico, data } = location.state || {};

     return (
       <div>
         <h2>Agendamento Confirmado!</h2>
         <p>Nome: {nome}</p>
         <p>Serviço: {servico}</p>
         <p>Data: {new Date(data).toLocaleString()}</p>
       </div>
     );
   };

   export default Confirmacao;
